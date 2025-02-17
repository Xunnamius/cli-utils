[**@-xun/cli**](../../README.md)

***

[@-xun/cli](../../README.md) / [src](../README.md) / makeRunner

# Function: makeRunner()

> **makeRunner**\<`CustomCliArguments`\>(`options`): \<`T`\>(...`args`) => `Promise`\<[`NullArguments`](../type-aliases/NullArguments.md) \| [`Arguments`](../type-aliases/Arguments.md)\<`CustomCliArguments`\>\>

Defined in: node\_modules/@black-flag/core/dist/src/util.d.ts:21

A high-order factory function that returns a "low-order" [runProgram](runProgram.md)
function that can be called multiple times while only having to provide a
subset of the required parameters at initialization.

This is useful when unit/integration testing your CLI, which will likely
require multiple calls to `runProgram(...)`.

Note: when an exception (e.g. bad arguments) occurs in the low-order
function, `undefined` will be returned if `configureProgram` threw or
`NullArguments` if `execute` threw. Otherwise, upon success, `Arguments` is
returned as expected. That is: **the promise returned by the low-order
function will never reject and no exception will ever be thrown.** Keep this
in mind when writing your unit tests and see [runProgram](runProgram.md) for more
details.

## Type Parameters

• **CustomCliArguments** *extends* `Record`\<`string`, `unknown`\> = `Record`\<`string`, `unknown`\>

## Parameters

### options

`object` & \{ `configurationHooks`: Promisable\<ConfigurationHooks\> \| undefined; `preExecutionContext`: `undefined`; \} \| \{ `configurationHooks`: `undefined`; `preExecutionContext`: Promisable\<PreExecutionContext\> \| undefined; \}

## Returns

`Function`

### Type Parameters

• **T** *extends* \[`string`\] \| \[`string`, `Promisable`\<[`ConfigurationHooks`](../type-aliases/ConfigurationHooks.md)\>\] \| \[`string`, `Promisable`\<[`PreExecutionContext`](../type-aliases/PreExecutionContext.md)\>\] \| \[`string`, `string` \| `string`[]\] \| \[`string`, `string` \| `string`[], `Promisable`\<[`ConfigurationHooks`](../type-aliases/ConfigurationHooks.md)\>\] \| \[`string`, `string` \| `string`[], `Promisable`\<[`PreExecutionContext`](../type-aliases/PreExecutionContext.md)\>\]

### Parameters

#### args

...`T` *extends* \[`_`, `...Tail[]`\] ? `Tail` : \[\]

### Returns

`Promise`\<[`NullArguments`](../type-aliases/NullArguments.md) \| [`Arguments`](../type-aliases/Arguments.md)\<`CustomCliArguments`\>\>
