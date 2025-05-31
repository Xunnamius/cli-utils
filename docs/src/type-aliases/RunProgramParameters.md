[**@-xun/cli**](../../README.md)

***

[@-xun/cli](../../README.md) / [src](../README.md) / RunProgramParameters

# Type Alias: RunProgramParameters

> **RunProgramParameters** = `RunProgramParametersWithAny` \| \[`string`, `Promisable`\<[`ConfigurationHooks`](ConfigurationHooks.md)\>\] \| \[`string`, `string` \| `string`[], `Promisable`\<[`ConfigurationHooks`](ConfigurationHooks.md)\>\]

Defined in: node\_modules/@black-flag/core/dist/src/index.d.ts:15

The available call signature parameters of the [runProgram](../functions/runProgram.md) function.

The first parameter is always the required `commandModulesPath` string,
optionally followed by `argv` string/array, and then either a * [ConfigurationHooks](ConfigurationHooks.md) or [PreExecutionContext](PreExecutionContext.md) instance (or a
promise that returns them).
