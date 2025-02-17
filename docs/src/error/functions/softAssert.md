[**@-xun/cli**](../../../README.md)

***

[@-xun/cli](../../../README.md) / [src/error](../README.md) / softAssert

# Function: softAssert()

## Call Signature

> **softAssert**(`message`): `never`

Defined in: [src/error.ts:49](https://github.com/Xunnamius/cli-utils/blob/118cc97de27374bcd26e43f836c2d837aa9f46f4/src/error.ts#L49)

Throw a CliError with the given string message, which
causes Black Flag to exit with the FrameworkExitCode.DefaultError
status code.

Use this function to assert end user error.

### Parameters

#### message

`string`

### Returns

`never`

## Call Signature

> **softAssert**(`value`, `message`): `asserts value`

Defined in: [src/error.ts:57](https://github.com/Xunnamius/cli-utils/blob/118cc97de27374bcd26e43f836c2d837aa9f46f4/src/error.ts#L57)

If `value` is falsy, throw a CliError with the given string message,
which causes Black Flag to exit with the
FrameworkExitCode.DefaultError status code.

Use this function to assert end user error.

### Parameters

#### value

`unknown`

#### message

`string`

### Returns

`asserts value`
