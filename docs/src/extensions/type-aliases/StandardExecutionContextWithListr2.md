[**@-xun/cli**](../../../README.md)

***

[@-xun/cli](../../../README.md) / [src/extensions](../README.md) / StandardExecutionContextWithListr2

# Type Alias: StandardExecutionContextWithListr2

> **StandardExecutionContextWithListr2**: `Merge`\<[`StandardExecutionContext`](StandardExecutionContext.md), \{ `taskManager`: `ListrManager`; \}\>

Defined in: [src/extensions.ts:78](https://github.com/Xunnamius/cli-utils/blob/7f8ef5efdc5cf88e30e7ff639a19dc6088662732/src/extensions.ts#L78)

This [ExecutionContext](../../type-aliases/ExecutionContext.md) subtype contains state related to
[standardCommonCliArguments](../variables/standardCommonCliArguments.md), both of which are required for the proper
function of [withStandardBuilder](../functions/withStandardBuilder.md). Also includes listr2 support.

See also: [StandardExecutionContext](StandardExecutionContext.md)
