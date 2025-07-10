[**@-xun/cli**](../../../README.md)

***

[@-xun/cli](../../../README.md) / [src/extensions](../README.md) / StandardExecutionContextWithListr2

# Type Alias: StandardExecutionContextWithListr2

> **StandardExecutionContextWithListr2** = `Merge`\<[`StandardExecutionContext`](StandardExecutionContext.md), \{ `taskManager`: `ListrManager`; \}\>

Defined in: [src/extensions.ts:72](https://github.com/Xunnamius/cli-utils/blob/c0def9bfc356e611437328d29969b8140f590f52/src/extensions.ts#L72)

This [ExecutionContext](../../type-aliases/ExecutionContext.md) subtype contains state related to
[standardCommonCliArguments](../variables/standardCommonCliArguments.md), both of which are required for the proper
function of [withStandardBuilder](../functions/withStandardBuilder.md). Also includes listr2 support.

See also: [StandardExecutionContext](StandardExecutionContext.md)
