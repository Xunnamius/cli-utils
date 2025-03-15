[**@-xun/cli**](../../README.md)

***

[@-xun/cli](../../README.md) / [src](../README.md) / BfeCustomBuilderFunctionParameters

# Type Alias: BfeCustomBuilderFunctionParameters\<CustomCliArguments, CustomExecutionContext, P\>

> **BfeCustomBuilderFunctionParameters**\<`CustomCliArguments`, `CustomExecutionContext`, `P`\>: `P` *extends* \[infer R, `...(infer S)`\] ? `S` *extends* \[infer T, `...(infer _U)`\] ? \[`R` & `object`, `T`, [`BfeStrictArguments`](BfeStrictArguments.md)\<`Partial`\<`CustomCliArguments`\>, `CustomExecutionContext`\> \| `undefined`\] : \[`R` & `object`, `...S`\] : `never`

Defined in: node\_modules/@black-flag/extensions/dist/packages/extensions/src/index.d.ts:363

A version of Black Flag's `builder` function parameters that exclude yargs
methods that are not supported by BFE.

## Type Parameters

• **CustomCliArguments** *extends* `Record`\<`string`, `unknown`\>

• **CustomExecutionContext** *extends* [`ExecutionContext`](ExecutionContext.md)

• **P** = `Parameters`\<[`BfBuilderFunction`](BfBuilderFunction.md)\<`CustomCliArguments`, `CustomExecutionContext`\>\>

## See

[withBuilderExtensions](../functions/withBuilderExtensions.md)
