[**@-xun/cli**](../../README.md)

***

[@-xun/cli](../../README.md) / [src](../README.md) / RouterProgram

# Type Alias: RouterProgram\<CustomCliArguments, CustomExecutionContext\>

> **RouterProgram**\<`CustomCliArguments`, `CustomExecutionContext`\> = `Pick`\<[`Program`](Program.md)\<`CustomCliArguments`, `CustomExecutionContext`\>, `"parseAsync"` \| `"command"`\>

Defined in: node\_modules/@black-flag/core/dist/src/types/program.d.ts:78

Represents an "router" [Program](Program.md) instance.

## Type Parameters

### CustomCliArguments

`CustomCliArguments` *extends* `Record`\<`string`, `unknown`\> = `Record`\<`string`, `unknown`\>

### CustomExecutionContext

`CustomExecutionContext` *extends* [`ExecutionContext`](ExecutionContext.md) = [`ExecutionContext`](ExecutionContext.md)
