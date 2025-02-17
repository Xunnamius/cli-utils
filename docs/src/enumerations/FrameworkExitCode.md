[**@-xun/cli**](../../README.md)

***

[@-xun/cli](../../README.md) / [src](../README.md) / FrameworkExitCode

# Enumeration: FrameworkExitCode

Defined in: node\_modules/@black-flag/core/dist/src/constant.d.ts:34

Well-known exit codes shared across CLI implementations.

## Enumeration Members

### AssertionFailed

> **AssertionFailed**: `3`

Defined in: node\_modules/@black-flag/core/dist/src/constant.d.ts:54

The exit code used when a sanity check fails. If your CLI is spitting out
this code, that's a hint to re-run things in debug mode (example:
`DEBUG='black-flag*' npx jest`) since an error is being suppressed.

In most cases, this exit code is indicative of improper use of Black Flag.

***

### DefaultError

> **DefaultError**: `1`

Defined in: node\_modules/@black-flag/core/dist/src/constant.d.ts:42

Hard-coded default fallback exit code when fatal errors occur.

***

### NotImplemented

> **NotImplemented**: `2`

Defined in: node\_modules/@black-flag/core/dist/src/constant.d.ts:46

The exit code used when executing an unimplemented child command.

***

### Ok

> **Ok**: `0`

Defined in: node\_modules/@black-flag/core/dist/src/constant.d.ts:38

The exit code used when execution succeeds and exits gracefully.
