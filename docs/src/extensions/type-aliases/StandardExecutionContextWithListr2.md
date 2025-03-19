[**@-xun/cli**](../../../README.md)

***

[@-xun/cli](../../../README.md) / [src/extensions](../README.md) / StandardExecutionContextWithListr2

# Type Alias: StandardExecutionContextWithListr2

> **StandardExecutionContextWithListr2** = `Merge`\<[`StandardExecutionContext`](StandardExecutionContext.md), \{ `taskManager`: `ListrManager`; \}\>

Defined in: [src/extensions.ts:72](https://github.com/Xunnamius/cli-utils/blob/f6fb27d968b4a76d51942bf6bd7e72fa69147ef1/src/extensions.ts#L72)

This [ExecutionContext](../../type-aliases/ExecutionContext.md) subtype contains state related to
[standardCommonCliArguments](../variables/standardCommonCliArguments.md), both of which are required for the proper
function of [withStandardBuilder](../functions/withStandardBuilder.md). Also includes listr2 support.

See also: [StandardExecutionContext](StandardExecutionContext.md)
