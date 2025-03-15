[**@-xun/cli**](../../../README.md)

***

[@-xun/cli](../../../README.md) / [src/configure](../README.md) / MakeStandardConfigureExecutionContextOptions

# Type Alias: MakeStandardConfigureExecutionContextOptions

> **MakeStandardConfigureExecutionContextOptions**: `object`

Defined in: [src/configure.ts:22](https://github.com/Xunnamius/cli-utils/blob/c7a284e51ef5349c2f43c26fe07feb15a870a5a3/src/configure.ts#L22)

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
