[**@-xun/cli**](../../README.md)

***

[@-xun/cli](../../README.md) / [src](../README.md) / AsStrictExecutionContext

# Type Alias: AsStrictExecutionContext\<CustomExecutionContext\>

> **AsStrictExecutionContext**\<`CustomExecutionContext`\>: `OmitIndexSignature`\<`Exclude`\<`CustomExecutionContext`, `"state"`\>\> & `OmitIndexSignature`\<`CustomExecutionContext`\[`"state"`\]\>

Defined in: node\_modules/@black-flag/extensions/dist/src/index.d.ts:354

Maps an [ExecutionContext](ExecutionContext.md) into an identical type that explicitly omits
its fallback indexers for unrecognized properties. Even though it is the
runtime equivalent of [ExecutionContext](ExecutionContext.md), using this type allows
intellisense to report bad/misspelled/missing arguments from `context` in
various places where it otherwise couldn't.

**This type is intended for intellisense purposes only.**

## Type Parameters

• **CustomExecutionContext** *extends* [`ExecutionContext`](ExecutionContext.md)
