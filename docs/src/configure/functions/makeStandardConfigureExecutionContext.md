[**@-xun/cli**](../../../README.md)

***

[@-xun/cli](../../../README.md) / [src/configure](../README.md) / makeStandardConfigureExecutionContext

# Function: makeStandardConfigureExecutionContext()

> **makeStandardConfigureExecutionContext**(`__namedParameters`): `Promise`\<`ConfigureExecutionContext`\<[`StandardExecutionContext`](../../extensions/type-aliases/StandardExecutionContext.md)\>\>

Defined in: [src/configure.ts:23](https://github.com/Xunnamius/cli-utils/blob/118cc97de27374bcd26e43f836c2d837aa9f46f4/src/configure.ts#L23)

Returns a ConfigureExecutionContext instance considered standard
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

`Promise`\<`ConfigureExecutionContext`\<[`StandardExecutionContext`](../../extensions/type-aliases/StandardExecutionContext.md)\>\>
