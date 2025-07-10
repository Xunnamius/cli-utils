[**@-xun/cli**](../../../README.md)

***

[@-xun/cli](../../../README.md) / [src/error](../README.md) / CliErrorMessage

# Variable: CliErrorMessage

> `const` **CliErrorMessage**: `object`

Defined in: [src/error.ts:25](https://github.com/Xunnamius/cli-utils/blob/00e0e41bdc381cca00e28f0fc2615d6c59c8e10f/src/error.ts#L25)

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
