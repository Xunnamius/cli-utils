[**@-xun/cli**](../../README.md)

***

[@-xun/cli](../../README.md) / [src](../README.md) / BfcErrorMessage

# Variable: BfcErrorMessage

> `const` **BfcErrorMessage**: `object`

Defined in: node\_modules/@black-flag/checks/dist/packages/checks/src/error.d.ts:4

A collection of possible error and warning messages.

## Type declaration

### BadType()

> **BadType**(`name`, `expected`, `actual`): `string`

#### Parameters

##### name

`string`

##### expected

`string`

##### actual

`string`

#### Returns

`string`

### OptionMustBeNonNegative()

> **OptionMustBeNonNegative**(`name`): `string`

#### Parameters

##### name

`string`

#### Returns

`string`

### OptionMustNotBeFalsy()

> **OptionMustNotBeFalsy**(`name`): `string`

#### Parameters

##### name

`string`

#### Returns

`string`

### OptionRequiresMinArgs()

> **OptionRequiresMinArgs**(`name`, `adjective?`): `string`

#### Parameters

##### name

`string`

##### adjective?

`string`

#### Returns

`string`

### OptionRequiresNoConflicts()

> **OptionRequiresNoConflicts**(`name`, `tuple`): `string`

#### Parameters

##### name

`string`

##### tuple

`unknown`[]

#### Returns

`string`

### OptionRequiresUniqueArgs()

> **OptionRequiresUniqueArgs**(`name`): `string`

#### Parameters

##### name

`string`

#### Returns

`string`

### OptionValueMustBeAlone()

> **OptionValueMustBeAlone**(`option`, `noun`): `string`

#### Parameters

##### option

`string`

##### noun

`string`

#### Returns

`string`

### OptionValueMustBeAloneWhenBaseline()

> **OptionValueMustBeAloneWhenBaseline**(`option`, `noun`): `string`

#### Parameters

##### option

`string`

##### noun

`string`

#### Returns

`string`
