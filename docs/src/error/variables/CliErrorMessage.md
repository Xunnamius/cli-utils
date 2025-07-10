[**@-xun/cli**](../../../README.md)

***

[@-xun/cli](../../../README.md) / [src/error](../README.md) / CliErrorMessage

# Variable: CliErrorMessage

> `const` **CliErrorMessage**: `object`

Defined in: [src/error.ts:25](https://github.com/Xunnamius/cli-utils/blob/c0def9bfc356e611437328d29969b8140f590f52/src/error.ts#L25)

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
