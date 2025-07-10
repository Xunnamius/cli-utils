[**@-xun/cli**](../../README.md)

***

[@-xun/cli](../../README.md) / [src](../README.md) / GracefulEarlyExitError

# Type Alias: GracefulEarlyExitError

> **GracefulEarlyExitError** = `InstanceType`\<*typeof* [`GracefulEarlyExitError`](../variables/GracefulEarlyExitError.md)\>

Defined in: node\_modules/@black-flag/core/dist/src/error.d.ts:117

Represents an exceptional event that should result in the immediate
termination of the application but with an exit code indicating success
(`0`).

Note that [CliErrorOptions.dangerouslyFatal](CliErrorOptions.md#dangerouslyfatal), if given, is always
ignored.
