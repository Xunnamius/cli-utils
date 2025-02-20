[**@-xun/cli**](../../../README.md)

***

[@-xun/cli](../../../README.md) / [src/error](../README.md) / CliErrorMessage

# Variable: CliErrorMessage

> `const` **CliErrorMessage**: `object`

Defined in: [src/error.ts:19](https://github.com/Xunnamius/cli-utils/blob/7f8ef5efdc5cf88e30e7ff639a19dc6088662732/src/error.ts#L19)

A collection of possible error and warning messages.

## Type declaration

### BadOptionValue()

#### Parameters

##### name

`string`

##### value

`unknown`

##### context?

`string`

#### Returns

`string`

### CommandDidNotComplete()

#### Parameters

##### command

`string`

#### Returns

`string`

### GuruMeditation()

#### Returns

`string`

### IgnoredOptions()

#### Parameters

##### args

`string`[]

#### Returns

`string`

### RequiresMinArgs()

#### Parameters

##### name

`string`

##### min

`number`

##### given?

`number`

##### adjective?

`string`

#### Returns

`string`

### UnsupportedCommand()

#### Returns

`string`
