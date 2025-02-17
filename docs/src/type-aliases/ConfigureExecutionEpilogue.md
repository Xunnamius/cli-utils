[**@-xun/cli**](../../README.md)

***

[@-xun/cli](../../README.md) / [src](../README.md) / ConfigureExecutionEpilogue

# Type Alias: ConfigureExecutionEpilogue()\<CustomContext\>

> **ConfigureExecutionEpilogue**\<`CustomContext`\>: (`argv`, `context`) => `Promisable`\<[`Arguments`](Arguments.md)\>

Defined in: node\_modules/@black-flag/core/dist/types/configure.d.ts:47

This function is called once after CLI argument parsing completes and either
(1) handler execution succeeds or (2) a `GracefulEarlyExitError` is thrown.
The value returned by this function is used as the return value of the
`PreExecutionContext::execute` method. This function will _not_ be called
when yargs argument validation fails.

This function is the complement of [ConfigureExecutionPrologue](ConfigureExecutionPrologue.md).

## Type Parameters

• **CustomContext** *extends* [`ExecutionContext`](ExecutionContext.md) = [`ExecutionContext`](ExecutionContext.md)

## Parameters

### argv

[`Arguments`](Arguments.md)

### context

`CustomContext`

## Returns

`Promisable`\<[`Arguments`](Arguments.md)\>
