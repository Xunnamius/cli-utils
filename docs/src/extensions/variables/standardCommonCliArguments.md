[**@-xun/cli**](../../../README.md)

***

[@-xun/cli](../../../README.md) / [src/extensions](../README.md) / standardCommonCliArguments

# Variable: standardCommonCliArguments

> `const` **standardCommonCliArguments**: `object`

Defined in: [src/extensions.ts:111](https://github.com/Xunnamius/cli-utils/blob/00e0e41bdc381cca00e28f0fc2615d6c59c8e10f/src/extensions.ts#L111)

This [BfeBuilderObject](../../type-aliases/BfeBuilderObject.md) instance describes the CLI arguments available
in the `argv` object of any command that uses [withStandardBuilder](../functions/withStandardBuilder.md) to
construct its `builder`.

This object is manually synchronized with [StandardCommonCliArguments](../type-aliases/StandardCommonCliArguments.md),
but the keys may differ slightly (e.g. hyphens may be elided in favor of
camelCase).

Note that this object purposely excludes the `help` and `version` keys, which
are considered standard common CLI arguments by this package.

## Type declaration

### hush

> `readonly` **hush**: `object`

#### hush.boolean

> `readonly` **boolean**: `true` = `true`

#### hush.default

> `readonly` **default**: `false` = `false`

#### hush.description

> `readonly` **description**: `"Set output to be somewhat less verbose"` = `'Set output to be somewhat less verbose'`

### quiet

> `readonly` **quiet**: `object`

#### quiet.boolean

> `readonly` **boolean**: `true` = `true`

#### quiet.default

> `readonly` **default**: `false` = `false`

#### quiet.description

> `readonly` **description**: `"Set output to be dramatically less verbose (implies --hush)"` = `'Set output to be dramatically less verbose (implies --hush)'`

#### quiet.implies

> `readonly` **implies**: `object`

#### quiet.implies.hush

> `readonly` **hush**: `true` = `true`

### silent

> `readonly` **silent**: `object`

#### silent.boolean

> `readonly` **boolean**: `true` = `true`

#### silent.default

> `readonly` **default**: `false` = `false`

#### silent.description

> `readonly` **description**: `"No output will be generated (implies --quiet)"` = `'No output will be generated (implies --quiet)'`

#### silent.implies

> `readonly` **implies**: `object`

#### silent.implies.hush

> `readonly` **hush**: `true` = `true`

#### silent.implies.quiet

> `readonly` **quiet**: `true` = `true`
