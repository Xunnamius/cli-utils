[**@-xun/cli**](../../README.md)

***

[@-xun/cli](../../README.md) / [src](../README.md) / configureProgram

# Function: configureProgram()

> **configureProgram**\<`CustomContext`\>(`commandModulePath`, `configurationHooks`?): `Promise`\<[`PreExecutionContext`](../type-aliases/PreExecutionContext.md)\>

Defined in: node\_modules/@black-flag/core/dist/src/index.d.ts:15

Create and return a [PreExecutionContext](../type-aliases/PreExecutionContext.md) containing fully-configured
[Program](../type-aliases/Program.md) instances and an [Executor](../type-aliases/Executor.md) entry point function.

Command auto-discovery will occur at `commandModulePath`. An exception will
occur if no commands are loadable from the given `commandModulePath`.

**This function throws whenever an exception occurs**, making it not ideal as
an entry point for a CLI. See [runProgram](runProgram.md) for a wrapper function that
handles exceptions and sets the exit code for you.

## Type Parameters

• **CustomContext** *extends* [`ExecutionContext`](../type-aliases/ExecutionContext.md) = [`ExecutionContext`](../type-aliases/ExecutionContext.md)

## Parameters

### commandModulePath

`string`

Command auto-discovery will occur at `commandModulePath`. An exception will
occur if no commands are loadable from the given `commandModulePath`.

`'file://...'`-style URLs are also accepted.

### configurationHooks?

`Promisable`\<[`ConfigurationHooks`](../type-aliases/ConfigurationHooks.md)\>

## Returns

`Promise`\<[`PreExecutionContext`](../type-aliases/PreExecutionContext.md)\>
