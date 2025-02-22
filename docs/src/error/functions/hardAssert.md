[**@-xun/cli**](../../../README.md)

***

[@-xun/cli](../../../README.md) / [src/error](../README.md) / hardAssert

# Function: hardAssert()

## Call Signature

> **hardAssert**(`message`): `never`

Defined in: [src/error.ts:84](https://github.com/Xunnamius/cli-utils/blob/f852d38d2fff563e997c4bcbc30d36f7a4093d87/src/error.ts#L84)

Throw a so-called "FrameworkError" with the given string message, which
causes Black Flag to exit with the [FrameworkExitCode.AssertionFailed](../../enumerations/FrameworkExitCode.md#assertionfailed)
status code.

Use this function to throw developer errors that end users can do nothing
about.

### Parameters

#### message

`string`

### Returns

`never`

## Call Signature

> **hardAssert**(`value`, `message`): `asserts value`

Defined in: [src/error.ts:93](https://github.com/Xunnamius/cli-utils/blob/f852d38d2fff563e997c4bcbc30d36f7a4093d87/src/error.ts#L93)

If `value` is falsy, throw a so-called "FrameworkError" with the given string
message, which causes Black Flag to exit with the
[FrameworkExitCode.AssertionFailed](../../enumerations/FrameworkExitCode.md#assertionfailed) status code.

Use this function to assert developer errors that end users can do nothing
about.

### Parameters

#### value

`unknown`

#### message

`string`

### Returns

`asserts value`
