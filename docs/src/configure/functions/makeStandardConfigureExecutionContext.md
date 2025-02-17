[**@-xun/cli**](../../../README.md)

***

[@-xun/cli](../../../README.md) / [src/configure](../README.md) / makeStandardConfigureExecutionContext

# Function: makeStandardConfigureExecutionContext()

> **makeStandardConfigureExecutionContext**(`__namedParameters`): `Promise`\<[`ConfigureExecutionContext`](../../type-aliases/ConfigureExecutionContext.md)\<[`StandardExecutionContext`](../../extensions/type-aliases/StandardExecutionContext.md)\>\>

Defined in: [src/configure.ts:23](https://github.com/Xunnamius/cli-utils/blob/caf1d74e366c1a64e9bac76fadfeeb54b974c17e/src/configure.ts#L23)

Returns a [ConfigureExecutionContext](../../type-aliases/ConfigureExecutionContext.md) instance considered standard
across [Xunnamius](https://github.com/Xunnamius)'s CLI projects.

## Parameters

### \_\_namedParameters

#### rootDebugLogger

`ExtendedDebugger`

The generic logging function used whenever the CLI wants to send text to
stderr.

#### rootGenericLogger

`ExtendedLogger`

The generic logging function used whenever the CLI wants to send text to
stdout.

#### withListr2Support?

`boolean` = `false`

If `true`, support for Listr2 tasks will be enabled for this program.

**Default**

```ts
false
```

## Returns

`Promise`\<[`ConfigureExecutionContext`](../../type-aliases/ConfigureExecutionContext.md)\<[`StandardExecutionContext`](../../extensions/type-aliases/StandardExecutionContext.md)\>\>
