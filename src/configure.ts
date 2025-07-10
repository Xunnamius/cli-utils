import { isNativeError } from 'node:util/types';

import { disableLoggers, LoggerType, TAB } from 'rejoinder';

import { TaskError } from 'universe:error.ts';
import { LogTag, MAX_LOG_ERROR_ENTRIES } from 'universe:logging.ts';
import { toFirstLowerCase, toSentenceCase } from 'universe:util.ts';

import type {
  ConfigureErrorHandlingEpilogue,
  ConfigureExecutionContext
} from '@black-flag/core';

import type { ExtendedDebugger, ExtendedLogger } from 'rejoinder';
import type { StandardExecutionContext } from 'universe:extensions.ts';

const { IF_NOT_SILENCED, IF_NOT_QUIETED, IF_NOT_HUSHED } = LogTag;

/**
 * @see {@link makeStandardConfigureExecutionContext}
 */
export type MakeStandardConfigureExecutionContextOptions = {
  /**
   * The generic logging function used whenever the CLI wants to send text to
   * stdout.
   */
  rootGenericLogger: ExtendedLogger;
  /**
   * The generic logging function used whenever the CLI wants to send text to
   * stderr.
   */
  rootDebugLogger: ExtendedDebugger;
  /**
   * If `true`, support for Listr2 tasks will be enabled for this program.
   *
   * Note that `taskManager` is created by calling rejoinder's
   * `createListrManager()` with no arguments. To provide custom overrides, you
   * must call this function manually and reassign `ExecutionContext`'s
   * `taskManager` accordingly.
   *
   * @default false
   */
  withListr2Support?: boolean;
};

/**
 * Returns a {@link ConfigureExecutionContext} instance considered standard
 * across [Xunnamius](https://github.com/Xunnamius)'s CLI projects.
 */
export async function makeStandardConfigureExecutionContext(
  options: MakeStandardConfigureExecutionContextOptions & { withListr2Support?: false }
): Promise<ConfigureExecutionContext<StandardExecutionContext>>;
export async function makeStandardConfigureExecutionContext(
  options: MakeStandardConfigureExecutionContextOptions & { withListr2Support: true }
): Promise<
  ConfigureExecutionContext<
    import('universe:extensions.ts').StandardExecutionContextWithListr2
  >
>;
export async function makeStandardConfigureExecutionContext(
  options: MakeStandardConfigureExecutionContextOptions
): Promise<ConfigureExecutionContext<StandardExecutionContext>>;
export async function makeStandardConfigureExecutionContext({
  rootDebugLogger,
  rootGenericLogger,
  withListr2Support = false
}: MakeStandardConfigureExecutionContextOptions): Promise<
  ConfigureExecutionContext<StandardExecutionContext>
> {
  const taskManager = withListr2Support
    ? (await import('rejoinder-listr2')).createListrManager()
    : undefined;

  return function (context) {
    return {
      ...context,
      standardLog: rootGenericLogger,
      standardDebug: rootDebugLogger,
      taskManager,
      state: {
        ...context.state,
        isSilenced: false,
        isQuieted: false,
        isHushed: false,
        startTime: new Date()
      }
    } as StandardExecutionContext;
  };
}

/**
 * Returns a {@link ConfigureErrorHandlingEpilogue} instance considered standard
 * across [Xunnamius](https://github.com/Xunnamius)'s CLI projects.
 */
export function makeStandardConfigureErrorHandlingEpilogue(): ConfigureErrorHandlingEpilogue<StandardExecutionContext> {
  return async function (
    ...[{ message, error }, _argv, context]: Parameters<
      ConfigureErrorHandlingEpilogue<StandardExecutionContext>
    >
  ) {
    context.standardDebug.error('%O', error);

    // ? Pretty print error output depending on how silent we're supposed to be
    if (message && !context.state.isSilenced) {
      if (context.state.didOutputHelpOrVersionText) {
        context.standardLog.newline([IF_NOT_SILENCED], 'alternate');
      }

      context.standardLog.error(
        [IF_NOT_SILENCED],
        `❌ Execution failed: ${toFirstLowerCase(message)}`
      );

      if (!context.state.isQuieted && isNativeError(error)) {
        const causalStack: string[] = [];

        for (
          let previousMessage = message, subError: Error | undefined = error;
          subError && causalStack.length < MAX_LOG_ERROR_ENTRIES;
          subError = isNativeError(subError.cause) ? subError.cause : undefined
        ) {
          const currentMessage = subError.message;

          // ? Do not output duplicate messages
          if (currentMessage === previousMessage) {
            if (pushMessageIfFinal(causalStack, subError, previousMessage)) {
              break;
            } else {
              continue;
            }
          }

          previousMessage = currentMessage;

          // ? Push the current message onto the causal stack
          causalStack.push(
            `${TAB}⮕  ${TaskError.isError(subError) ? toFirstLowerCase(currentMessage) : currentMessage}`
          );

          let shouldBreak = false;

          // ? If we're over max count, indicate messages clipped
          if (causalStack.length >= MAX_LOG_ERROR_ENTRIES) {
            causalStack.push('(remaining entries have been hidden)');
            shouldBreak = true;
          } else {
            // ? If the next message isn't an Error, it'll be the final message
            shouldBreak = pushMessageIfFinal(causalStack, subError, previousMessage);
          }

          if (shouldBreak) {
            break;
          }
        }

        if (causalStack.length) {
          context.standardLog.newline([IF_NOT_QUIETED], 'alternate');
          context.standardLog.error([IF_NOT_QUIETED], '❌ Causal stack:');
          causalStack.forEach((item) => {
            context.standardLog.error([IF_NOT_QUIETED], item);
          });
        }
      }

      if (context.taskManager) {
        const taskManager = (
          context as import('universe:extensions.ts').StandardExecutionContextWithListr2
        ).taskManager;

        if (!context.state.isHushed && taskManager.errors.length > 0) {
          context.standardLog.newline([IF_NOT_HUSHED], 'alternate');
          context.standardLog.error([IF_NOT_HUSHED], '❌ Fatal task errors:');

          const { ListrErrorTypes } = await import('rejoinder-listr2');

          for (const taskError of taskManager.errors) {
            if (taskError.type !== ListrErrorTypes.HAS_FAILED_WITHOUT_ERROR) {
              context.standardLog.error(
                [IF_NOT_HUSHED],
                `${TAB}❗ ${toSentenceCase(taskError.message)}`
              );
            }
          }
        }
      }
    }

    // ? Disable output logging after this point (not including debug loggers)
    disableLoggers({ type: LoggerType.GenericOutput });
  };
}

/**
 * Returns `true` if the message is final (and loop should break). Returns
 * `false` otherwise.
 */
function pushMessageIfFinal(
  causalStack: string[],
  subError: Error,
  previousMessage: string
): boolean {
  // ? If the next message isn't an Error, it will be the final message
  if (subError.cause && !isNativeError(subError.cause)) {
    // eslint-disable-next-line @typescript-eslint/no-base-to-string
    const finalMessage = String(subError.cause);
    if (finalMessage !== previousMessage) {
      causalStack.push(`${TAB}⮕  ${finalMessage}`);
    }

    return true;
  }

  return false;
}
