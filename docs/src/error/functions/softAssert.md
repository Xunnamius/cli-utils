[**@-xun/cli**](../../../README.md)

***

[@-xun/cli](../../../README.md) / [src/error](../README.md) / softAssert

# Function: softAssert()

## Call Signature

> **softAssert**(`message`): `never`

Defined in: [src/error.ts:52](https://github.com/Xunnamius/cli-utils/blob/00e0e41bdc381cca00e28f0fc2615d6c59c8e10f/src/error.ts#L52)

Throw a [CliError](../../variables/CliError.md) with the given string message, which
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

Defined in: [src/error.ts:60](https://github.com/Xunnamius/cli-utils/blob/00e0e41bdc381cca00e28f0fc2615d6c59c8e10f/src/error.ts#L60)

If `value` is falsy, throw a [CliError](../../variables/CliError.md) with the given string message,
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
