[**@-xun/cli**](../../README.md)

***

[@-xun/cli](../../README.md) / [src](../README.md) / ConfigureExecutionContext

# Type Alias: ConfigureExecutionContext()\<CustomContext\>

> **ConfigureExecutionContext**\<`CustomContext`\>: (`context`) => `Promisable`\<`CustomContext`\>

Defined in: node\_modules/@black-flag/core/dist/types/configure.d.ts:12

This function is called once towards the beginning of the execution of
`configureProgram` and should return what will become the global
[ExecutionContext](ExecutionContext.md) singleton.

Note that any errors thrown this early in the initialization process will be
thrown as-is and will NOT trigger [ConfigureErrorHandlingEpilogue](ConfigureErrorHandlingEpilogue.md).

## Type Parameters

• **CustomContext** *extends* [`ExecutionContext`](ExecutionContext.md) = [`ExecutionContext`](ExecutionContext.md)

## Parameters

### context

[`ExecutionContext`](ExecutionContext.md)

## Returns

`Promisable`\<`CustomContext`\>
