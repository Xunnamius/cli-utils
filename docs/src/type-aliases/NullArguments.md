[**@-xun/cli**](../../README.md)

***

[@-xun/cli](../../README.md) / [src](../README.md) / NullArguments

# Type Alias: NullArguments\<CustomExecutionContext\>

> **NullArguments**\<`CustomExecutionContext`\>: `object` & [`FrameworkArguments`](FrameworkArguments.md)\<`CustomExecutionContext`\>

Defined in: node\_modules/@black-flag/core/dist/types/program.d.ts:20

Represents an empty or "null" `Arguments` object devoid of useful data.

This result type is fed to certain configuration hooks and returned by
various `Arguments`-returning functions when an exceptional event prevents
yargs from returning a real `Arguments` parse result.

## Type declaration

### \_

> **\_**: \[\]

### $0

> **$0**: `"<NullArguments: no parse result available due to exception>"`

## Type Parameters

• **CustomExecutionContext** *extends* [`ExecutionContext`](ExecutionContext.md) = [`ExecutionContext`](ExecutionContext.md)
