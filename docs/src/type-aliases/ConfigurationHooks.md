[**@-xun/cli**](../../README.md)

***

[@-xun/cli](../../README.md) / [src](../README.md) / ConfigurationHooks

# Type Alias: ConfigurationHooks\<CustomContext\>

> **ConfigurationHooks**\<`CustomContext`\> = `object`

Defined in: node\_modules/@black-flag/core/dist/src/types/configure.d.ts:88

An object containing zero or more configuration hooks. See each hook type
definition for details.

## Type Parameters

### CustomContext

`CustomContext` *extends* [`ExecutionContext`](ExecutionContext.md) = [`ExecutionContext`](ExecutionContext.md)

## Properties

### configureArguments?

> `optional` **configureArguments**: [`ConfigureArguments`](ConfigureArguments.md)\<`CustomContext`\>

Defined in: node\_modules/@black-flag/core/dist/src/types/configure.d.ts:135

This function is called once towards the beginning of the execution of
`PreExecutionContext::execute` and should return a `process.argv`-like
array.

This is where yargs middleware and other argument pre-processing can be
implemented, if desired.

Note that errors thrown at this point in the initialization process will be
handled by [ConfigureErrorHandlingEpilogue](ConfigureErrorHandlingEpilogue.md) but will never send help
text to stderr regardless of error type.

***

### configureErrorHandlingEpilogue?

> `optional` **configureErrorHandlingEpilogue**: [`ConfigureErrorHandlingEpilogue`](ConfigureErrorHandlingEpilogue.md)\<`CustomContext`\>

Defined in: node\_modules/@black-flag/core/dist/src/types/configure.d.ts:163

This function is called once at the very end of the error handling process
after an error has occurred.

Note that this function is _always_ called whenever there is an error,
regardless of which other functions have already been called. The only
exceptions to this are if (1) the error occurs within
`configureErrorHandlingEpilogue` itself or (2) the error is an instance of
`GracefulEarlyExitError`.

This function is also called even after yargs internally handles and
reports an argument parsing/validation error.

***

### configureExecutionContext?

> `optional` **configureExecutionContext**: [`ConfigureExecutionContext`](ConfigureExecutionContext.md)\<`CustomContext`\>

Defined in: node\_modules/@black-flag/core/dist/src/types/configure.d.ts:103

This function is called once towards the beginning of the execution of
`configureProgram` and should return the value that will become the global
[ExecutionContext](ExecutionContext.md) singleton.

Note that the value returned by this function is discarded after being
shallowly cloned by `Object.assign`. That is: the global
[ExecutionContext](ExecutionContext.md) singleton will not strictly equal `context`.

Also note that any errors thrown this early in the initialization process
will trigger a framework error and will NOT be handled by
[ConfigureErrorHandlingEpilogue](ConfigureErrorHandlingEpilogue.md) nor send help text to stderr
regardless of error type.

***

### configureExecutionEpilogue?

> `optional` **configureExecutionEpilogue**: [`ConfigureExecutionEpilogue`](ConfigureExecutionEpilogue.md)\<`CustomContext`\>

Defined in: node\_modules/@black-flag/core/dist/src/types/configure.d.ts:149

This function is called once after CLI argument parsing completes and
either (1) handler execution succeeds or (2) a `GracefulEarlyExitError` is
thrown. The value returned by this function is used as the return value of
the `PreExecutionContext::execute` method. This function will _not_ be
called when yargs argument validation fails.

This function is the complement of [ConfigureExecutionPrologue](ConfigureExecutionPrologue.md).

Note that errors thrown at this point in the cleanup process will be
handled by [ConfigureErrorHandlingEpilogue](ConfigureErrorHandlingEpilogue.md) but will never send help
text to stderr regardless of error type.

***

### configureExecutionPrologue?

> `optional` **configureExecutionPrologue**: [`ConfigureExecutionPrologue`](ConfigureExecutionPrologue.md)\<`CustomContext`\>

Defined in: node\_modules/@black-flag/core/dist/src/types/configure.d.ts:122

This function is called once towards the end of the execution of
`configureProgram`, after all commands have been discovered but before any
have been executed, and should apply any final configurations to the
programs that constitute the command line interface.

All commands and subcommands known to Black Flag are available in the
[ExecutionContext.commands](ExecutionContext.md#commands) map, which can be accessed from the
`context` parameter or from the [Arguments](Arguments.md) object returned by
`Program::parseAsync` etc.

This function is the complement of [ConfigureExecutionEpilogue](ConfigureExecutionEpilogue.md).

Note that any errors thrown this early in the initialization process will
trigger a framework error and will NOT be handled by
[ConfigureErrorHandlingEpilogue](ConfigureErrorHandlingEpilogue.md) nor send help text to stderr
regardless of error type.
