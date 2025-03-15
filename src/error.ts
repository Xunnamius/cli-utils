import { CliError, FrameworkExitCode } from '@black-flag/core';
import { BfeErrorMessage } from '@black-flag/extensions';

import { toSentenceCase } from 'universe:util.ts';

/**
 * An `Error` class where the first letter of the message is capitalized.
 */
export class TaskError extends Error {
  constructor(...args: Required<ConstructorParameters<typeof Error>>) {
    super(toSentenceCase(args[0]), args[1]);
  }
}

/**
 * A collection of possible error and warning messages.
 */
/* istanbul ignore next */
export const CliErrorMessage = {
  GuruMeditation() {
    return 'an impossible scenario occurred';
  },
  UnsupportedCommand() {
    return 'this project does not support this command';
  },
  CommandDidNotComplete(command: string) {
    return `the "${command}" command did not complete`;
  },
  IgnoredOptions(args: string[]) {
    return `the following command options were ignored: ${args.join(', ')}`;
  },
  BadOptionValue(name: string, value: unknown, context?: string) {
    return `option "${name}" cannot have value "${String(value)}"${
      context ? ` ${context}` : ''
    }`;
  }
};

/**
 * Throw a {@link CliError} with the given string message, which
 * causes Black Flag to exit with the {@link FrameworkExitCode.DefaultError}
 * status code.
 *
 * Use this function to assert end user error.
 */
export function softAssert(message: string): never;
/**
 * If `value` is falsy, throw a {@link CliError} with the given string message,
 * which causes Black Flag to exit with the
 * {@link FrameworkExitCode.DefaultError} status code.
 *
 * Use this function to assert end user error.
 */
export function softAssert(value: unknown, message: string): asserts value;
export function softAssert(
  valueOrMessage: unknown,
  message?: string
): asserts valueOrMessage {
  let shouldThrow = true;

  if (typeof message === 'string') {
    const value = valueOrMessage;
    shouldThrow = !value;
  } else {
    message = String(valueOrMessage);
  }

  if (shouldThrow) {
    throw new CliError(message, { suggestedExitCode: FrameworkExitCode.DefaultError });
  }
}

/**
 * Throw a so-called "FrameworkError" with the given string message, which
 * causes Black Flag to exit with the {@link FrameworkExitCode.AssertionFailed}
 * status code.
 *
 * Use this function to throw developer errors that end users can do nothing
 * about.
 */
export function hardAssert(message: string): never;
/**
 * If `value` is falsy, throw a so-called "FrameworkError" with the given string
 * message, which causes Black Flag to exit with the
 * {@link FrameworkExitCode.AssertionFailed} status code.
 *
 * Use this function to assert developer errors that end users can do nothing
 * about.
 */
export function hardAssert(value: unknown, message: string): asserts value;
export function hardAssert(
  valueOrMessage: unknown,
  message?: string
): asserts valueOrMessage {
  let shouldThrow = true;

  if (typeof message === 'string') {
    const value = valueOrMessage;
    shouldThrow = !value;
  } else {
    message = String(valueOrMessage);
  }

  if (shouldThrow) {
    throw new CliError(BfeErrorMessage.FrameworkError(message), {
      suggestedExitCode: FrameworkExitCode.AssertionFailed
    });
  }
}
