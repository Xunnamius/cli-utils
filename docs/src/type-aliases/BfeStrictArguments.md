[**@-xun/cli**](../../README.md)

***

[@-xun/cli](../../README.md) / [src](../README.md) / BfeStrictArguments

# Type Alias: BfeStrictArguments\<CustomCliArguments, CustomExecutionContext\>

> **BfeStrictArguments**\<`CustomCliArguments`, `CustomExecutionContext`\> = `OmitIndexSignature`\<[`Arguments`](Arguments.md)\<`CustomCliArguments`, `CustomExecutionContext`\>\> & [`FrameworkArguments`](FrameworkArguments.md)\<`CustomExecutionContext`\> & `object`

Defined in: node\_modules/@black-flag/extensions/dist/packages/extensions/src/index.d.ts:344

A stricter version of Black Flag's
[Arguments](https://github.com/Xunnamius/black-flag/blob/main/docs/api/src/exports/type-aliases/Arguments.md)
type that explicitly omits the fallback indexers for unrecognized arguments.
Even though it is the runtime equivalent of `Arguments`, using this type
allows intellisense to report bad/misspelled/missing arguments from `argv` in
various places where it otherwise couldn't.

**This type is intended for intellisense purposes only.**

## Type declaration

### \[$artificiallyInvoked\]?

> `optional` **\[$artificiallyInvoked\]**: `boolean`

## Type Parameters

### CustomCliArguments

`CustomCliArguments` *extends* `Record`\<`string`, `unknown`\>

### CustomExecutionContext

`CustomExecutionContext` *extends* [`ExecutionContext`](ExecutionContext.md)
