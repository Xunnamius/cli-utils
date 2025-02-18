[**@-xun/cli**](../../../README.md)

***

[@-xun/cli](../../../README.md) / [src/extensions](../README.md) / StandardExecutionContext

# Type Alias: StandardExecutionContext

> **StandardExecutionContext**: [`ExecutionContext`](../../type-aliases/ExecutionContext.md) & `object` & `0` *extends* `1` & `ListrManager` ? `object` : `object`

Defined in: [src/extensions.ts:40](https://github.com/Xunnamius/cli-utils/blob/caf1d74e366c1a64e9bac76fadfeeb54b974c17e/src/extensions.ts#L40)

This [ExecutionContext](../../type-aliases/ExecutionContext.md) subtype contains state related to
[standardCommonCliArguments](../variables/standardCommonCliArguments.md), both of which are required for the proper
function of [withStandardBuilder](../functions/withStandardBuilder.md).

## Type declaration

### standardDebug

> **standardDebug**: `ExtendedDebugger`

The ExtendedDebugger for the CLI (not Black Flag's).

### standardLog

> **standardLog**: `ExtendedLogger`

The ExtendedLogger for the CLI (not Black Flag's).

### state

> **state**: `object`

#### state.isHushed

> **isHushed**: `boolean`

If `true`, the program should output only the most pertinent information.

#### state.isQuieted

> **isQuieted**: `boolean`

If `true`, the program should be dramatically less verbose. It also
implies `isHushed` is `true`.

#### state.isSilenced

> **isSilenced**: `boolean`

If `true`, the program should not output anything at all. It also implies
`isQuieted` and `isHushed` are both `true`.

#### state.startTime

> **startTime**: `Date`

A `Date` object representing the start time of execution.
