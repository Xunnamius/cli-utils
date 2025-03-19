[**@-xun/cli**](../../../README.md)

***

[@-xun/cli](../../../README.md) / [src/error](../README.md) / softAssert

# Function: softAssert()

## Call Signature

> **softAssert**(`message`): `never`

Defined in: [src/error.ts:46](https://github.com/Xunnamius/cli-utils/blob/f6fb27d968b4a76d51942bf6bd7e72fa69147ef1/src/error.ts#L46)

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

Defined in: [src/error.ts:54](https://github.com/Xunnamius/cli-utils/blob/f6fb27d968b4a76d51942bf6bd7e72fa69147ef1/src/error.ts#L54)

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
