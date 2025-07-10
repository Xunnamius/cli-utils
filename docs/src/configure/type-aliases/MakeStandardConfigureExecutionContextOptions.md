[**@-xun/cli**](../../../README.md)

***

[@-xun/cli](../../../README.md) / [src/configure](../README.md) / MakeStandardConfigureExecutionContextOptions

# Type Alias: MakeStandardConfigureExecutionContextOptions

> **MakeStandardConfigureExecutionContextOptions** = `object`

Defined in: [src/configure.ts:22](https://github.com/Xunnamius/cli-utils/blob/00e0e41bdc381cca00e28f0fc2615d6c59c8e10f/src/configure.ts#L22)

## See

[makeStandardConfigureExecutionContext](../functions/makeStandardConfigureExecutionContext.md)

## Properties

### rootDebugLogger

> **rootDebugLogger**: `ExtendedDebugger`

Defined in: [src/configure.ts:32](https://github.com/Xunnamius/cli-utils/blob/00e0e41bdc381cca00e28f0fc2615d6c59c8e10f/src/configure.ts#L32)

The generic logging function used whenever the CLI wants to send text to
stderr.

***

### rootGenericLogger

> **rootGenericLogger**: `ExtendedLogger`

Defined in: [src/configure.ts:27](https://github.com/Xunnamius/cli-utils/blob/00e0e41bdc381cca00e28f0fc2615d6c59c8e10f/src/configure.ts#L27)

The generic logging function used whenever the CLI wants to send text to
stdout.

***

### withListr2Support?

> `optional` **withListr2Support**: `boolean`

Defined in: [src/configure.ts:43](https://github.com/Xunnamius/cli-utils/blob/00e0e41bdc381cca00e28f0fc2615d6c59c8e10f/src/configure.ts#L43)

If `true`, support for Listr2 tasks will be enabled for this program.

Note that `taskManager` is created by calling rejoinder's
`createListrManager()` with no arguments. To provide custom overrides, you
must call this function manually and reassign `ExecutionContext`'s
`taskManager` accordingly.

#### Default

```ts
false
```
