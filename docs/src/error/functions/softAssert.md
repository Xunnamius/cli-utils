[**@-xun/cli**](../../../README.md)

***

[@-xun/cli](../../../README.md) / [src/error](../README.md) / softAssert

# Function: softAssert()

## Call Signature

> **softAssert**(`message`): `never`

Defined in: [src/error.ts:46](https://github.com/Xunnamius/cli-utils/blob/dd8d74def9fbb70e45b008f545cfdb5eac2fb4d4/src/error.ts#L46)

Throw a [CliError](../../classes/CliError.md) with the given string message, which
causes Black Flag to exit with the [FrameworkExitCode.DefaultError](../../enumerations/FrameworkExitCode.md#defaulterror)
status code.

Use this function to assert end user error.

### Parameters

#### message

`string`

### Returns

`never`

## Call Signature

> **softAssert**(`value`, `message`): `asserts value`

Defined in: [src/error.ts:54](https://github.com/Xunnamius/cli-utils/blob/dd8d74def9fbb70e45b008f545cfdb5eac2fb4d4/src/error.ts#L54)

If `value` is falsy, throw a [CliError](../../classes/CliError.md) with the given string message,
which causes Black Flag to exit with the
[FrameworkExitCode.DefaultError](../../enumerations/FrameworkExitCode.md#defaulterror) status code.

Use this function to assert end user error.

### Parameters

#### value

`unknown`

#### message

`string`

### Returns

`asserts value`
