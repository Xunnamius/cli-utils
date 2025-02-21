[**@-xun/cli**](../../../README.md)

***

[@-xun/cli](../../../README.md) / [src/configure](../README.md) / MakeStandardConfigureExecutionContextOptions

# Type Alias: MakeStandardConfigureExecutionContextOptions

> **MakeStandardConfigureExecutionContextOptions**: `object`

Defined in: [src/configure.ts:22](https://github.com/Xunnamius/cli-utils/blob/f852d38d2fff563e997c4bcbc30d36f7a4093d87/src/configure.ts#L22)

## Type declaration

### rootDebugLogger

> **rootDebugLogger**: `ExtendedDebugger`

The generic logging function used whenever the CLI wants to send text to
stderr.

### rootGenericLogger

> **rootGenericLogger**: `ExtendedLogger`

The generic logging function used whenever the CLI wants to send text to
stdout.

### withListr2Support?

> `optional` **withListr2Support**: `boolean`

If `true`, support for Listr2 tasks will be enabled for this program.

#### Default

```ts
false
```

## See

[makeStandardConfigureExecutionContext](../functions/makeStandardConfigureExecutionContext.md)
