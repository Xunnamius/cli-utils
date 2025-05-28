[**@-xun/cli**](../../README.md)

***

[@-xun/cli](../../README.md) / [src](../README.md) / Executor

# Type Alias: Executor()

> **Executor** = (`rawArgv?`) => `Promise`\<[`Arguments`](Arguments.md)\>

Defined in: node\_modules/@black-flag/core/dist/src/types/program.d.ts:193

This function accepts an optional `rawArgv` array that defaults to
`yargs::hideBin(process.argv)` and returns an `Arguments` object representing
the arguments parsed and validated by yargs (i.e.
`ExecutionContext::state.deepestParseResult`).

**This function throws whenever\* an exception occurs**, making it not ideal
as an entry point for a CLI. See [runProgram](../functions/runProgram.md) for a wrapper function
that handles exceptions and sets the exit code for you.

Note: when the special `GracefulEarlyExitError` exception is thrown _from
within a command's handler or builder_, `Executor` will set
`ExecutionContext::state.deepestParseResult` to `NullArguments` and
`ExecutionContext::state.isGracefullyExiting` to `true`. Further, `Executor`
**will not** re-throw the exception in this special case, returning
`NullArguments` instead.

## Parameters

### rawArgv?

`Parameters`\<[`ConfigureArguments`](ConfigureArguments.md)\>\[`0`\]

## Returns

`Promise`\<[`Arguments`](Arguments.md)\>
