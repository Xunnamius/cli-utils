[**@-xun/cli**](../../../README.md)

***

[@-xun/cli](../../../README.md) / [src/configure](../README.md) / makeStandardConfigureExecutionContext

# Function: makeStandardConfigureExecutionContext()

> **makeStandardConfigureExecutionContext**(`__namedParameters`): `Promise`\<`ConfigureExecutionContext`\<[`StandardExecutionContext`](../../extensions/type-aliases/StandardExecutionContext.md)\>\>

Defined in: [src/configure.ts:23](https://github.com/Xunnamius/cli-utils/blob/74bfa47fc80f4ebda9a4e0fb9b2b0d112ef3baed/src/configure.ts#L23)

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
