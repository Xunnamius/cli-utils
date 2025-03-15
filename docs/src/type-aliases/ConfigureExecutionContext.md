[**@-xun/cli**](../../README.md)

***

[@-xun/cli](../../README.md) / [src](../README.md) / ConfigureExecutionContext

# Type Alias: ConfigureExecutionContext()\<CustomContext\>

> **ConfigureExecutionContext**\<`CustomContext`\>: (`context`) => `Promisable`\<`CustomContext`\>

Defined in: node\_modules/@black-flag/core/dist/src/types/configure.d.ts:18

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

## Type Parameters

• **CustomContext** *extends* [`ExecutionContext`](ExecutionContext.md) = [`ExecutionContext`](ExecutionContext.md)

## Parameters

### context

[`ExecutionContext`](ExecutionContext.md)

## Returns

`Promisable`\<`CustomContext`\>
