[**@-xun/cli**](../../../README.md)

***

[@-xun/cli](../../../README.md) / [src/error](../README.md) / hardAssert

# Function: hardAssert()

## Call Signature

> **hardAssert**(`message`): `never`

Defined in: [src/error.ts:87](https://github.com/Xunnamius/cli-utils/blob/c0def9bfc356e611437328d29969b8140f590f52/src/error.ts#L87)

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

Defined in: [src/error.ts:96](https://github.com/Xunnamius/cli-utils/blob/c0def9bfc356e611437328d29969b8140f590f52/src/error.ts#L96)

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
