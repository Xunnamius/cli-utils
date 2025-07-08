[**@-xun/cli**](../../../README.md)

***

[@-xun/cli](../../../README.md) / [src/error](../README.md) / CliErrorMessage

# Variable: CliErrorMessage

> `const` **CliErrorMessage**: `object`

Defined in: [src/error.ts:19](https://github.com/Xunnamius/cli-utils/blob/3e95f8ce42185c7633feda8038393f1d5d6e79dd/src/error.ts#L19)

A collection of possible error and warning messages.

## Type declaration

### BadOptionValue()

> **BadOptionValue**(`name`, `value`, `context?`): `string`

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

> **CommandDidNotComplete**(`command`): `string`

#### Parameters

##### command

`string`

#### Returns

`string`

### GuruMeditation()

> **GuruMeditation**(): `string`

#### Returns

`string`

### IgnoredOptions()

> **IgnoredOptions**(`args`): `string`

#### Parameters

##### args

`string`[]

#### Returns

`string`

### UnsupportedCommand()

> **UnsupportedCommand**(): `string`

#### Returns

`string`
