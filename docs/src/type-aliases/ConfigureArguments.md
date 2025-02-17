[**@-xun/cli**](../../README.md)

***

[@-xun/cli](../../README.md) / [src](../README.md) / ConfigureArguments

# Type Alias: ConfigureArguments()\<CustomContext\>

> **ConfigureArguments**\<`CustomContext`\>: (`rawArgv`, `context`) => `Promisable`\<*typeof* `process.argv`\>

Defined in: node\_modules/@black-flag/core/dist/types/configure.d.ts:37

This function is called once towards the beginning of the execution of
`PreExecutionContext::execute` and should return a `process.argv`-like array.

This is where yargs middleware and other argument pre-processing can be
implemented.

## Type Parameters

• **CustomContext** *extends* [`ExecutionContext`](ExecutionContext.md) = [`ExecutionContext`](ExecutionContext.md)

## Parameters

### rawArgv

*typeof* `process.argv`

### context

`CustomContext`

## Returns

`Promisable`\<*typeof* `process.argv`\>
