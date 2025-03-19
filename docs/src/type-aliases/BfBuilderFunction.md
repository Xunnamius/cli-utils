[**@-xun/cli**](../../README.md)

***

[@-xun/cli](../../README.md) / [src](../README.md) / BfBuilderFunction

# Type Alias: BfBuilderFunction\<CustomCliArguments, CustomExecutionContext\>

> **BfBuilderFunction**\<`CustomCliArguments`, `CustomExecutionContext`\> = `Extract`\<[`Configuration`](Configuration.md)\<`CustomCliArguments`, `CustomExecutionContext`\>\[`"builder"`\], `Function`\>

Defined in: node\_modules/@black-flag/extensions/dist/packages/extensions/src/index.d.ts:12

The function type of the `builder` export accepted by Black Flag.

## Type Parameters

### CustomCliArguments

`CustomCliArguments` *extends* `Record`\<`string`, `unknown`\>

### CustomExecutionContext

`CustomExecutionContext` *extends* [`ExecutionContext`](ExecutionContext.md)
