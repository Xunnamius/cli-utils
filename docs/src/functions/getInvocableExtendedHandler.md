[**@-xun/cli**](../../README.md)

***

[@-xun/cli](../../README.md) / [src](../README.md) / getInvocableExtendedHandler

# Function: getInvocableExtendedHandler()

> **getInvocableExtendedHandler**\<`CustomCliArguments`, `CustomExecutionContext`\>(`maybeCommand`, `context`): `Promise`\<(`argv_`) => `Promise`\<`void`\>\>

Defined in: node\_modules/@black-flag/extensions/dist/src/index.d.ts:489

This function returns a version of `maybeCommand`'s handler function that is
ready to invoke immediately. It can be used with both BFE and normal Black
Flag command exports.

It returns a handler that expects to be passed a "reified argv," i.e. the
object given to the command handler after all checks have passed and all
updates to argv have been applied (including `subOptionOf` and BFE's
`implies`).

For this reason, invoking the returned handler will not run any BF or BFE
builder configurations on the given argv object. **Whatever you pass the
returned handler will be re-gifted to the command's handler as-is and without
correctness checks.**

Use `CustomCliArguments` (and `CustomExecutionContext`) to assert the
expected shape of the "reified argv".

See [the BFE
documentation](https://github.com/Xunnamius/black-flag-extensions?tab=readme-ov-file#getinvocableextendedhandler)
for more details.

## Type Parameters

• **CustomCliArguments** *extends* `Record`\<`string`, `unknown`\>

• **CustomExecutionContext** *extends* [`ExecutionContext`](../type-aliases/ExecutionContext.md)

## Parameters

### maybeCommand

`Promisable`\<[`ImportedConfigurationModule`](../type-aliases/ImportedConfigurationModule.md)\<`CustomCliArguments`, `CustomExecutionContext`\> \| [`ImportedConfigurationModule`](../type-aliases/ImportedConfigurationModule.md)\<`CustomCliArguments`, [`AsStrictExecutionContext`](../type-aliases/AsStrictExecutionContext.md)\<`CustomExecutionContext`\>\>\>

### context

`CustomExecutionContext`

## Returns

`Promise`\<(`argv_`) => `Promise`\<`void`\>\>
