[**@-xun/cli**](../../README.md)

***

[@-xun/cli](../../README.md) / [src](../README.md) / ConfigureExecutionPrologue

# Type Alias: ConfigureExecutionPrologue()\<CustomContext\>

> **ConfigureExecutionPrologue**\<`CustomContext`\>: (`rootPrograms`, `context`) => `Promisable`\<`void`\>

Defined in: node\_modules/@black-flag/core/dist/types/configure.d.ts:29

This function is called once towards the end of the execution of
`configureProgram`, after all commands have been discovered but before any
have been executed, and should apply any final configurations to the programs
that constitute the command line interface.

All commands and sub-commands known to Black Flag are available in the
[ExecutionContext.commands](ExecutionContext.md#commands) map, which can be accessed from the
`context` parameter or from the [Arguments](Arguments.md) object returned by
`Program::parseAsync` et al.

This function is the complement of [ConfigureExecutionEpilogue](ConfigureExecutionEpilogue.md).

Note that any errors thrown this early in the initialization process will be
thrown as-is and will NOT trigger [ConfigureErrorHandlingEpilogue](ConfigureErrorHandlingEpilogue.md).

## Type Parameters

• **CustomContext** *extends* [`ExecutionContext`](ExecutionContext.md) = [`ExecutionContext`](ExecutionContext.md)

## Parameters

### rootPrograms

[`Programs`](Programs.md)

### context

`CustomContext`

## Returns

`Promisable`\<`void`\>
