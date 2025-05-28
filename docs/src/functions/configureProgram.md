[**@-xun/cli**](../../README.md)

***

[@-xun/cli](../../README.md) / [src](../README.md) / configureProgram

# Function: configureProgram()

> **configureProgram**(`commandModulesPath`, `configurationHooks?`): `Promise`\<[`PreExecutionContext`](../type-aliases/PreExecutionContext.md)\>

Defined in: node\_modules/@black-flag/core/dist/src/index.d.ts:100

Create and return a [PreExecutionContext](../type-aliases/PreExecutionContext.md) containing fully-configured
[Program](../type-aliases/Program.md) instances and an [Executor](../type-aliases/Executor.md) entry point function.

Command auto-discovery will occur at `commandModulesPath`. An exception will
occur if no commands are loadable from the given `commandModulesPath`.

**This function throws whenever an exception occurs**, making it not ideal as
an entry point for a CLI, but perhaps useful during testing. See
[runProgram](runProgram.md) for a wrapper function that handles exceptions and sets
the exit code automatically.

## Parameters

### commandModulesPath

`string`

Command auto-discovery will occur at `commandModulesPath`. An exception will
occur if no commands are loadable from the given `commandModulesPath`.

`'file://...'`-style URLs are also accepted.

### configurationHooks?

`Promisable`\<[`ConfigurationHooks`](../type-aliases/ConfigurationHooks.md)\>

## Returns

`Promise`\<[`PreExecutionContext`](../type-aliases/PreExecutionContext.md)\>
