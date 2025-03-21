import { $executionContext } from '@black-flag/core';
import { CommandNotImplementedError } from '@black-flag/core/util';
import { $artificiallyInvoked, withBuilderExtensions } from '@black-flag/extensions';
import { createDebugLogger, disableLoggingByTag, getDisabledTags } from 'rejoinder';

import { globalDebuggerNamespace } from 'universe:constant.ts';
import { LogTag } from 'universe:logging.ts';

import type { ExecutionContext } from '@black-flag/core/util';

import type {
  BfeBuilderObject,
  WithBuilderExtensionsConfig,
  WithBuilderExtensionsReturnType
} from '@black-flag/extensions';

import type { ExtendedDebugger, ExtendedLogger } from 'rejoinder';
import type { Entries, Merge } from 'type-fest';

export { withUsageExtensions as withStandardUsage } from '@black-flag/extensions';

/**
 * This {@link ExecutionContext} subtype contains state related to
 * {@link standardCommonCliArguments}, both of which are required for the proper
 * function of {@link withStandardBuilder}.
 *
 * See also: {@link StandardExecutionContextWithListr2}
 */
export type StandardExecutionContext = ExecutionContext & {
  /**
   * The {@link ExtendedLogger} for the CLI (not Black Flag's).
   */
  standardLog: ExtendedLogger;
  /**
   * The {@link ExtendedDebugger} for the CLI (not Black Flag's).
   */
  standardDebug: ExtendedDebugger;
  state: {
    /**
     * If `true`, the program should not output anything at all. It also implies
     * `isQuieted` and `isHushed` are both `true`.
     */
    isSilenced: boolean;
    /**
     * If `true`, the program should be dramatically less verbose. It also
     * implies `isHushed` is `true`.
     */
    isQuieted: boolean;
    /**
     * If `true`, the program should output only the most pertinent information.
     */
    isHushed: boolean;
    /**
     * A `Date` object representing the start time of execution.
     */
    startTime: Date;
  };
  /**
   * The global Listr task manager singleton. This is `undefined` if listr2
   * support has not been explicitly enabled.
   */
  taskManager?: unknown;
};

/**
 * This {@link ExecutionContext} subtype contains state related to
 * {@link standardCommonCliArguments}, both of which are required for the proper
 * function of {@link withStandardBuilder}. Also includes listr2 support.
 *
 * See also: {@link StandardExecutionContext}
 */
export type StandardExecutionContextWithListr2 = Merge<
  StandardExecutionContext,
  {
    /**
     * The global Listr task manager singleton.
     */
    taskManager: import('rejoinder-listr2').ListrManager;
  }
>;

/**
 * These properties will be available in the `argv` object of any command that
 * uses {@link withStandardBuilder} to construct its `builder`.
 *
 * This type is manually synchronized with {@link standardCommonCliArguments},
 * but the keys may differ slightly (e.g. hyphens may be elided in favor of
 * camelCase).
 *
 * Note that this type purposely excludes the `help` and `version` keys, which
 * are considered standard common CLI arguments by this package.
 */
export type StandardCommonCliArguments = {
  hush: boolean;
  quiet: boolean;
  silent: boolean;
};

/**
 * This {@link BfeBuilderObject} instance describes the CLI arguments available
 * in the `argv` object of any command that uses {@link withStandardBuilder} to
 * construct its `builder`.
 *
 * This object is manually synchronized with {@link StandardCommonCliArguments},
 * but the keys may differ slightly (e.g. hyphens may be elided in favor of
 * camelCase).
 *
 * Note that this object purposely excludes the `help` and `version` keys, which
 * are considered standard common CLI arguments by this package.
 */
export const standardCommonCliArguments = {
  hush: {
    boolean: true,
    default: false,
    description: 'Set output to be somewhat less verbose'
  },
  quiet: {
    boolean: true,
    default: false,
    implies: { hush: true },
    description: 'Set output to be dramatically less verbose (implies --hush)'
  },
  silent: {
    boolean: true,
    default: false,
    implies: { quiet: true, hush: true },
    description: 'No output will be generated (implies --quiet)'
  }
} as const satisfies BfeBuilderObject<Record<string, unknown>, StandardExecutionContext>;

/**
 * This is an array of the keys in {@link standardCommonCliArguments}, each of
 * which have a one-to-one relation with a key of
 * {@link StandardCommonCliArguments}.
 *
 * Note that this array purposely excludes `'help'` and `'version'`, which are
 * considered standard common CLI arguments by this package and are therefore
 * automatically included when appropriate.
 */
export const standardCommonCliArgumentsKeys = Object.keys(
  standardCommonCliArguments
) as (keyof typeof standardCommonCliArguments)[];

/**
 * This function enables several options-related units of functionality
 * considered standard across [Xunnamius](https://github.com/Xunnamius)'s CLI
 * projects.
 *
 * This function is a relatively thin wrapper around
 * {@link withBuilderExtensions}. It also disables
 * [`duplicate-arguments-array`](https://github.com/yargs/yargs-parser?tab=readme-ov-file#duplicate-arguments-array)
 * and enables
 * [`strip-dashed`](https://github.com/yargs/yargs-parser?tab=readme-ov-file#strip-dashed)
 * and
 * [`strip-aliased`](https://github.com/yargs/yargs-parser?tab=readme-ov-file#strip-aliased)
 * in yargs-parser.
 *
 * When providing a `customBuilder` function or object, any key in the returned
 * object that is also a key in {@link standardCommonCliArguments} will have its
 * value merged with the value in {@link standardCommonCliArguments} _instead_
 * of fully overwriting it. This means you can pass minimal configuration values
 * for the keys that are also in {@link standardCommonCliArguments} and those
 * values will be shallowly merged.
 */
export function withStandardBuilder<
  CustomCliArguments extends StandardCommonCliArguments,
  CustomExecutionContext extends StandardExecutionContext
>(
  customBuilder?: Parameters<
    typeof withBuilderExtensions<CustomCliArguments, CustomExecutionContext>
  >[0],
  {
    additionalCommonOptions = [],
    disableAutomaticGrouping = false,
    disableAutomaticSorting = false
  }: Omit<
    WithBuilderExtensionsConfig<CustomCliArguments>,
    'commonOptions' | 'enableAutomaticSorting'
  > & {
    /**
     * Set to `true` to disable BFE's support for automatic sorting of options.
     *
     * See [the
     * documentation](https://github.com/Xunnamius/black-flag/blob/main/packages/extensions/README.md#automatic-sorting-of-options)
     * for details.
     *
     * @default false
     */
    disableAutomaticSorting?: boolean;
    /**
     * An array of zero or more options that should be grouped under _"Common
     * Options"_ when [automatic grouping of related
     * options](https://github.com/Xunnamius/black-flag-extensions?tab=readme-ov-file#automatic-grouping-of-related-options)
     * is enabled.
     *
     * Target options can be specified in one of two forms:
     *
     * - As a string key of `CustomCliArguments`, or the string `'version'`.
     *   Note that `'help'` is always implicitly included and need not be
     *   specified.
     *
     * - A {@link BfeBuilderObject} instance defining additional "standard
     *   common arguments," which will be shallowly merged into
     *   {@link standardCommonCliArguments}. Its string keys will then be
     *   considered like with the first form.
     *
     * This setting is ignored if `disableAutomaticGrouping === true`.
     *
     * @default []
     */
    additionalCommonOptions?: (
      | NonNullable<
          WithBuilderExtensionsConfig<CustomCliArguments>['commonOptions']
        >[number]
      | BfeBuilderObject<CustomCliArguments, CustomExecutionContext>
    )[];
  } = {}
): WithBuilderExtensionsReturnType<CustomCliArguments, CustomExecutionContext> {
  const wsbDebug = createDebugLogger({
    namespace: `${globalDebuggerNamespace}:withStandardBuilder`
  });

  wsbDebug('entered withStandardBuilder function');

  const extraOptionConfigurations = Object.fromEntries(
    additionalCommonOptions
      // ? Theses are handled specially by Black Flag and BFE
      .filter((opt) => opt !== 'version' && opt !== 'help')
      .flatMap((opt) => {
        return (
          ['string', 'number', 'symbol'].includes(typeof opt)
            ? // ? Include name-only common options as empty BfeBuilderObjects
              [[opt, {}]]
            : Object.entries(opt)
        ) as Entries<BfeBuilderObject<CustomCliArguments, CustomExecutionContext>>;
      })
  );

  wsbDebug('extraOptionConfigurations: %O', extraOptionConfigurations);

  const allCommonCliArguments: Partial<
    BfeBuilderObject<CustomCliArguments, CustomExecutionContext>
  > = {
    ...standardCommonCliArguments
  };

  // ? Merge incoming extra common options over standard common options
  for (const [option, argumentConfig] of Object.entries(extraOptionConfigurations)) {
    allCommonCliArguments[option] = Object.assign(
      {},
      allCommonCliArguments[option] || {},
      argumentConfig
    );
  }

  // ! Order is important
  const allCommonOptionNames = Array.from(
    new Set([
      'help',
      ...(additionalCommonOptions.includes('version') ? ['version'] : []),
      ...standardCommonCliArgumentsKeys,
      ...Object.keys(extraOptionConfigurations)
    ])
  );

  wsbDebug('allCommonOptionNames: %O', allCommonOptionNames);
  wsbDebug('allCommonCliArguments: %O', allCommonCliArguments);

  const [builder, withHandlerExtensions] = withBuilderExtensions<
    CustomCliArguments,
    CustomExecutionContext
  >(
    function builder(blackFlag, helpOrVersionSet, argv) {
      wsbDebug('entered withStandardBuilder::builder wrapper function');
      wsbDebug('calling customBuilder (if a function) and returning builder object');

      const customCliArguments =
        (typeof customBuilder === 'function'
          ? customBuilder(blackFlag, helpOrVersionSet, argv)
          : customBuilder) || {};

      wsbDebug('exited customBuilder (if a function) with builder object');
      wsbDebug('customCliArguments (pre-merge): %O', customCliArguments);

      // ? Merge incoming custom cli arguments over all computed common options
      for (const [option, argumentConfig] of Object.entries(customCliArguments)) {
        if (option in allCommonCliArguments) {
          customCliArguments[option] = Object.assign(
            {},
            allCommonCliArguments[option] || {},
            argumentConfig
          );
        }
      }

      wsbDebug(
        'final customCliArguments (will be merged onto allCommonCliArguments): %O',
        customCliArguments
      );

      return {
        ...allCommonCliArguments,
        ...customCliArguments
      } as BfeBuilderObject<CustomCliArguments, CustomExecutionContext>;
    },
    {
      commonOptions: allCommonOptionNames,
      disableAutomaticGrouping,
      enableAutomaticSorting: !disableAutomaticSorting
    }
  );

  wsbDebug('exited withStandardBuilder function');

  return [
    function standardBuilder(blackFlag, helpOrVersionSet, rawArgv) {
      const debug = wsbDebug.extend('standardBuilder');

      debug('entered standardBuilder');

      debug('updating "Commands:" string to "Subcommands:"');
      blackFlag.updateStrings({ 'Commands:': 'Subcommands:' });

      debug('reconfiguring yargs-parser');
      blackFlag.parserConfiguration({
        'duplicate-arguments-array': false,
        'greedy-arrays': true
      });

      debug('invoking withBuilderExtensions::builder');
      const returnedCliArguments = builder(blackFlag, helpOrVersionSet, rawArgv);

      debug('exited standardBuilder');
      return returnedCliArguments;
    },
    function withStandardHandler(
      customHandler: Parameters<typeof withHandlerExtensions>[0]
    ) {
      return async function handler(rawArgv) {
        const tagsSet = new Set<LogTag>();
        const debug = createDebugLogger({
          namespace: `${globalDebuggerNamespace}:withStandardHandler`
        });

        debug('entered withStandardHandler wrapper');

        debug('manually invoking withHandlerExtensions');
        await withHandlerExtensions(async (argv) => {
          const {
            hush,
            quiet,
            silent,
            [$artificiallyInvoked]: wasArtificiallyInvoked,
            [$executionContext]: { state }
          } = argv;

          const originallyDisabledTags = getDisabledTags();

          debug('hush: %O', hush);
          debug('quiet: %O', quiet);
          debug('silent: %O', silent);
          debug('disabledTags: %O', originallyDisabledTags);
          debug('wasArtificiallyInvoked (unused): %O', wasArtificiallyInvoked);

          if (silent) {
            tagsSet.add(LogTag.IF_NOT_SILENCED);
            state.isSilenced = true;
            state.showHelpOnFail = false;
          }

          if (quiet) {
            tagsSet.add(LogTag.IF_NOT_QUIETED);
            state.isQuieted = true;
          }

          if (hush) {
            tagsSet.add(LogTag.IF_NOT_HUSHED);
            state.isHushed = true;
          }

          disableLoggingByTag({ tags: Array.from(tagsSet) });

          debug('invoking customHandler (or defaultHandler if undefined)');
          await (customHandler ?? defaultHandler)(argv);
        })(rawArgv);

        debug('exited withStandardHandler wrapper');
      };
    }
  ];
}

function defaultHandler() {
  throw new CommandNotImplementedError();
}
