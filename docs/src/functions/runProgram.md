[**@-xun/cli**](../../README.md)

***

[@-xun/cli](../../README.md) / [src](../README.md) / runProgram

# Function: runProgram()

## Call Signature

> **runProgram**\<`CustomCliArguments`\>(...`args`): `Promise`\<`undefined` \| [`NullArguments`](../type-aliases/NullArguments.md) \| [`Arguments`](../type-aliases/Arguments.md)\<`CustomCliArguments`\>\>

Defined in: node\_modules/@black-flag/core/dist/src/util.d.ts:58

Invokes the dynamically imported
`configureProgram(commandModulePath).execute()` function.

This function is suitable for a CLI entry point since it will **never throw
or reject no matter what.** Instead, when an error is caught,
`process.exitCode` is set to the appropriate value and either `NullArguments`
(only if `GracefulEarlyExitError` was thrown) or `undefined` is returned.

Note: It is always safe to invoke this form of `runProgram` as many times as
desired.

### Type Parameters

• **CustomCliArguments** *extends* `Record`\<`string`, `unknown`\> = `Record`\<`string`, `unknown`\>

### Parameters

#### args

...\[`string`\]

### Returns

`Promise`\<`undefined` \| [`NullArguments`](../type-aliases/NullArguments.md) \| [`Arguments`](../type-aliases/Arguments.md)\<`CustomCliArguments`\>\>

`NullArguments` if `GracefulEarlyExitError` is thrown, `undefined`
if any other error occurs, or `Arguments` otherwise.

## Call Signature

> **runProgram**\<`CustomCliArguments`\>(...`args`): `Promise`\<`undefined` \| [`NullArguments`](../type-aliases/NullArguments.md) \| [`Arguments`](../type-aliases/Arguments.md)\<`CustomCliArguments`\>\>

Defined in: node\_modules/@black-flag/core/dist/src/util.d.ts:74

Invokes the dynamically imported `configureProgram(commandModulePath,
configurationHooks).execute()` function.

This function is suitable for a CLI entry point since it will **never throw
or reject no matter what.** Instead, when an error is caught,
`process.exitCode` is set to the appropriate value and either `NullArguments`
(only if `GracefulEarlyExitError` was thrown) or `undefined` is returned.

Note: It is always safe to invoke this form of `runProgram` as many times as
desired.

### Type Parameters

• **CustomCliArguments** *extends* `Record`\<`string`, `unknown`\> = `Record`\<`string`, `unknown`\>

### Parameters

#### args

...\[`string`, `Promisable`\<[`ConfigurationHooks`](../type-aliases/ConfigurationHooks.md)\>\]

### Returns

`Promise`\<`undefined` \| [`NullArguments`](../type-aliases/NullArguments.md) \| [`Arguments`](../type-aliases/Arguments.md)\<`CustomCliArguments`\>\>

`NullArguments` if `GracefulEarlyExitError` is thrown, `undefined`
if any other error occurs, or `Arguments` otherwise.

## Call Signature

> **runProgram**\<`CustomCliArguments`\>(...`args`): `Promise`\<`undefined` \| [`NullArguments`](../type-aliases/NullArguments.md) \| [`Arguments`](../type-aliases/Arguments.md)\<`CustomCliArguments`\>\>

Defined in: node\_modules/@black-flag/core/dist/src/util.d.ts:91

Invokes the `preExecutionContext.execute()` function.

**WARNING: reusing the same `preExecutionContext` with multiple invocations
of `runProgram` will cause successive invocations to fail.** This is because
yargs does not support calling `yargs::parseAsync` more than once. If this is
unacceptable, do not pass `runProgram` a `preExecutionContext` property.

This function is suitable for a CLI entry point since it will **never throw
or reject no matter what.** Instead, when an error is caught,
`process.exitCode` is set to the appropriate value and either `NullArguments`
(only if `GracefulEarlyExitError` was thrown) or `undefined` is returned.

### Type Parameters

• **CustomCliArguments** *extends* `Record`\<`string`, `unknown`\> = `Record`\<`string`, `unknown`\>

### Parameters

#### args

...\[`string`, `Promisable`\<[`PreExecutionContext`](../type-aliases/PreExecutionContext.md)\>\]

### Returns

`Promise`\<`undefined` \| [`NullArguments`](../type-aliases/NullArguments.md) \| [`Arguments`](../type-aliases/Arguments.md)\<`CustomCliArguments`\>\>

`NullArguments` if `GracefulEarlyExitError` is thrown, `undefined`
if any other error occurs, or `Arguments` otherwise.

## Call Signature

> **runProgram**\<`CustomCliArguments`\>(...`args`): `Promise`\<[`NullArguments`](../type-aliases/NullArguments.md) \| [`Arguments`](../type-aliases/Arguments.md)\<`CustomCliArguments`\>\>

Defined in: node\_modules/@black-flag/core/dist/src/util.d.ts:111

Invokes the dynamically imported
`configureProgram(commandModulePath).execute(argv)` function. If `argv` is a
string, `argv = argv.split(' ')` is applied first.

This function is suitable for a CLI entry point since it will **never throw
or reject no matter what.** Instead, when an error is caught,
`process.exitCode` is set to the appropriate value and either `NullArguments`
(only if `GracefulEarlyExitError` was thrown) or `undefined` is returned.

Note: It is always safe to invoke this form of `runProgram` as many times as
desired.

### Type Parameters

• **CustomCliArguments** *extends* `Record`\<`string`, `unknown`\> = `Record`\<`string`, `unknown`\>

### Parameters

#### args

...\[`string`, `string` \| `string`[]\]

### Returns

`Promise`\<[`NullArguments`](../type-aliases/NullArguments.md) \| [`Arguments`](../type-aliases/Arguments.md)\<`CustomCliArguments`\>\>

`NullArguments` if `GracefulEarlyExitError` is thrown, `undefined`
if any other error occurs, or `Arguments` otherwise.

## Call Signature

> **runProgram**\<`CustomCliArguments`\>(...`args`): `Promise`\<[`NullArguments`](../type-aliases/NullArguments.md) \| [`Arguments`](../type-aliases/Arguments.md)\<`CustomCliArguments`\>\>

Defined in: node\_modules/@black-flag/core/dist/src/util.d.ts:128

Invokes the dynamically imported `configureProgram(commandModulePath,
configurationHooks).execute(argv)` function. If `argv` is a string, `argv =
argv.split(' ')` is applied first.

This function is suitable for a CLI entry point since it will **never throw
or reject no matter what.** Instead, when an error is caught,
`process.exitCode` is set to the appropriate value and either `NullArguments`
(only if `GracefulEarlyExitError` was thrown) or `undefined` is returned.

Note: It is always safe to invoke this form of `runProgram` as many times as
desired.

### Type Parameters

• **CustomCliArguments** *extends* `Record`\<`string`, `unknown`\> = `Record`\<`string`, `unknown`\>

### Parameters

#### args

...\[`string`, `string` \| `string`[], `Promisable`\<[`ConfigurationHooks`](../type-aliases/ConfigurationHooks.md)\>\]

### Returns

`Promise`\<[`NullArguments`](../type-aliases/NullArguments.md) \| [`Arguments`](../type-aliases/Arguments.md)\<`CustomCliArguments`\>\>

`NullArguments` if `GracefulEarlyExitError` is thrown, `undefined`
if any other error occurs, or `Arguments` otherwise.

## Call Signature

> **runProgram**\<`CustomCliArguments`\>(...`args`): `Promise`\<[`NullArguments`](../type-aliases/NullArguments.md) \| [`Arguments`](../type-aliases/Arguments.md)\<`CustomCliArguments`\>\>

Defined in: node\_modules/@black-flag/core/dist/src/util.d.ts:150

Invokes the `preExecutionContext.execute(argv)` function. If `argv` is a
string, `argv = argv.split(' ')` is applied first.

**WARNING: reusing the same `preExecutionContext` with multiple invocations
of `runProgram` will cause successive invocations to fail.** This is because
yargs does not support calling `yargs::parseAsync` more than once. If this is
unacceptable, do not pass `runProgram` a `preExecutionContext` property.

This function is suitable for a CLI entry point since it will **never throw
or reject no matter what.** Instead, when an error is caught,
`process.exitCode` is set to the appropriate value and either `NullArguments`
(only if `GracefulEarlyExitError` was thrown) or `undefined` is returned.

### Type Parameters

• **CustomCliArguments** *extends* `Record`\<`string`, `unknown`\> = `Record`\<`string`, `unknown`\>

### Parameters

#### args

...\[`string`, `string` \| `string`[], `Promisable`\<[`PreExecutionContext`](../type-aliases/PreExecutionContext.md)\>\]

### Returns

`Promise`\<[`NullArguments`](../type-aliases/NullArguments.md) \| [`Arguments`](../type-aliases/Arguments.md)\<`CustomCliArguments`\>\>

`NullArguments` if `GracefulEarlyExitError` is thrown, `undefined`
if any other error occurs, or `Arguments` otherwise.
