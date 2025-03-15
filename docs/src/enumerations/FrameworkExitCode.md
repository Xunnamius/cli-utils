[**@-xun/cli**](../../README.md)

***

[@-xun/cli](../../README.md) / [src](../README.md) / FrameworkExitCode

# Enumeration: FrameworkExitCode

Defined in: node\_modules/@black-flag/core/dist/src/constant.d.ts:42

Well-known exit codes shared across CLI implementations.

## Enumeration Members

### AssertionFailed

> **AssertionFailed**: `3`

Defined in: node\_modules/@black-flag/core/dist/src/constant.d.ts:66

The exit code used when a sanity check fails. This includes (but is not
limited to) all _framework errors_.

If your CLI is spitting out this code, deeper insight can be had by
re-running things in debug mode (i.e. `DEBUG='bf:*' npx jest` or `DEBUG='*'
npx jest`).

In most (but not all) cases, this exit code is indicative of improper use
of Black Flag by the developer.

***

### DefaultError

> **DefaultError**: `1`

Defined in: node\_modules/@black-flag/core/dist/src/constant.d.ts:50

Hard-coded default fallback exit code when fatal errors occur.

***

### NotImplemented

> **NotImplemented**: `2`

Defined in: node\_modules/@black-flag/core/dist/src/constant.d.ts:54

The exit code used when executing an unimplemented child command.

***

### Ok

> **Ok**: `0`

Defined in: node\_modules/@black-flag/core/dist/src/constant.d.ts:46

The exit code used when execution succeeds and exits gracefully.
