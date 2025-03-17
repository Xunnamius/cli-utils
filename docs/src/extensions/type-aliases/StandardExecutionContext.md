[**@-xun/cli**](../../../README.md)

***

[@-xun/cli](../../../README.md) / [src/extensions](../README.md) / StandardExecutionContext

# Type Alias: StandardExecutionContext

> **StandardExecutionContext** = [`ExecutionContext`](../../type-aliases/ExecutionContext.md) & `object`

Defined in: [src/extensions.ts:35](https://github.com/Xunnamius/cli-utils/blob/682abac4b6c3e5d4332a000231005349474476be/src/extensions.ts#L35)

This [ExecutionContext](../../type-aliases/ExecutionContext.md) subtype contains state related to
[standardCommonCliArguments](../variables/standardCommonCliArguments.md), both of which are required for the proper
function of [withStandardBuilder](../functions/withStandardBuilder.md).

See also: [StandardExecutionContextWithListr2](StandardExecutionContextWithListr2.md)

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

### taskManager?

> `optional` **taskManager**: `unknown`

The global Listr task manager singleton. This is `undefined` if listr2
support has not been explicitly enabled.
