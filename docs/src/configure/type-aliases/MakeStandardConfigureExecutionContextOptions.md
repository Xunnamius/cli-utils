[**@-xun/cli**](../../../README.md)

***

[@-xun/cli](../../../README.md) / [src/configure](../README.md) / MakeStandardConfigureExecutionContextOptions

# Type Alias: MakeStandardConfigureExecutionContextOptions

> **MakeStandardConfigureExecutionContextOptions** = `object`

Defined in: [src/configure.ts:22](https://github.com/Xunnamius/cli-utils/blob/682abac4b6c3e5d4332a000231005349474476be/src/configure.ts#L22)

## See

[makeStandardConfigureExecutionContext](../functions/makeStandardConfigureExecutionContext.md)

## Properties

### rootDebugLogger

> **rootDebugLogger**: `ExtendedDebugger`

Defined in: [src/configure.ts:32](https://github.com/Xunnamius/cli-utils/blob/682abac4b6c3e5d4332a000231005349474476be/src/configure.ts#L32)

The generic logging function used whenever the CLI wants to send text to
stderr.

***

### rootGenericLogger

> **rootGenericLogger**: `ExtendedLogger`

Defined in: [src/configure.ts:27](https://github.com/Xunnamius/cli-utils/blob/682abac4b6c3e5d4332a000231005349474476be/src/configure.ts#L27)

The generic logging function used whenever the CLI wants to send text to
stdout.

***

### withListr2Support?

> `optional` **withListr2Support**: `boolean`

Defined in: [src/configure.ts:38](https://github.com/Xunnamius/cli-utils/blob/682abac4b6c3e5d4332a000231005349474476be/src/configure.ts#L38)

If `true`, support for Listr2 tasks will be enabled for this program.

#### Default

```ts
false
```
