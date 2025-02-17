[**@-xun/cli**](../../README.md)

***

[@-xun/cli](../../README.md) / [src](../README.md) / BfeStrictArguments

# Type Alias: BfeStrictArguments\<CustomCliArguments, CustomExecutionContext\>

> **BfeStrictArguments**\<`CustomCliArguments`, `CustomExecutionContext`\>: `OmitIndexSignature`\<[`Arguments`](Arguments.md)\<`CustomCliArguments`, `CustomExecutionContext`\>\> & [`FrameworkArguments`](FrameworkArguments.md)\<`CustomExecutionContext`\> & `object`

Defined in: node\_modules/@black-flag/extensions/dist/src/index.d.ts:342

A stricter version of [Arguments](Arguments.md) that explicitly omits the fallback
indexer for unrecognized arguments. Even though it is the runtime equivalent
of [Arguments](Arguments.md), using this type allows intellisense to report
bad/misspelled/missing arguments from `argv` in various places where it
otherwise couldn't.

**This type is intended for intellisense purposes only.**

## Type declaration

### \[$artificiallyInvoked\]?

> `optional` **\[$artificiallyInvoked\]**: `boolean`

## Type Parameters

• **CustomCliArguments** *extends* `Record`\<`string`, `unknown`\>

• **CustomExecutionContext** *extends* [`ExecutionContext`](ExecutionContext.md)
