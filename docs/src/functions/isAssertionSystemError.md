[**@-xun/cli**](../../README.md)

***

[@-xun/cli](../../README.md) / [src](../README.md) / isAssertionSystemError

# Function: isAssertionSystemError()

> **isAssertionSystemError**(`error`): `error is ErrnoException & { actual?: unknown; code: "ERR_ASSERTION"; expected?: unknown; generatedMessage: boolean; operator: string }`

Defined in: node\_modules/@black-flag/core/dist/src/util.d.ts:170

Type-guard for Node's "ERR_ASSERTION" so-called `SystemError`.

## Parameters

### error

`unknown`

## Returns

`error is ErrnoException & { actual?: unknown; code: "ERR_ASSERTION"; expected?: unknown; generatedMessage: boolean; operator: string }`
