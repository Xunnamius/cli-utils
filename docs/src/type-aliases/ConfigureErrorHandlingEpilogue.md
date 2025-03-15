[**@-xun/cli**](../../README.md)

***

[@-xun/cli](../../README.md) / [src](../README.md) / ConfigureErrorHandlingEpilogue

# Type Alias: ConfigureErrorHandlingEpilogue()\<CustomContext\>

> **ConfigureErrorHandlingEpilogue**\<`CustomContext`\>: (`meta`, `argv`, `context`) => `Promisable`\<`void`\>

Defined in: node\_modules/@black-flag/core/dist/src/types/configure.d.ts:77

This function is called once at the very end of the error handling process
after an error has occurred.

Note that this function is _always_ called whenever there is an error,
regardless of which other functions have already been called. The only
exceptions to this are if (1) the error occurs within
`configureErrorHandlingEpilogue` itself or (2) the error is an instance of
`GracefulEarlyExitError`.

This function is also called even after yargs internally handles and reports
an argument parsing/validation error.

## Type Parameters

• **CustomContext** *extends* [`ExecutionContext`](ExecutionContext.md) = [`ExecutionContext`](ExecutionContext.md)

## Parameters

### meta

#### error

`unknown`

#### exitCode

`number`

#### message

`string`

### argv

`Omit`\<`Partial`\<[`Arguments`](Arguments.md)\>, *typeof* [`$executionContext`](../variables/$executionContext.md)\> & `object`

### context

`CustomContext`

## Returns

`Promisable`\<`void`\>
