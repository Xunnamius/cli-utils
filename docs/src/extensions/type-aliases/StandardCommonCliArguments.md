[**@-xun/cli**](../../../README.md)

***

[@-xun/cli](../../../README.md) / [src/extensions](../README.md) / StandardCommonCliArguments

# Type Alias: StandardCommonCliArguments

> **StandardCommonCliArguments**: `object`

Defined in: [src/extensions.ts:99](https://github.com/Xunnamius/cli-utils/blob/f852d38d2fff563e997c4bcbc30d36f7a4093d87/src/extensions.ts#L99)

These properties will be available in the `argv` object of any command that
uses [withStandardBuilder](../functions/withStandardBuilder.md) to construct its `builder`.

This type is manually synchronized with [standardCommonCliArguments](../variables/standardCommonCliArguments.md),
but the keys may differ slightly (e.g. hyphens may be elided in favor of
camelCase).

Note that this type purposely excludes the `help` and `version` keys, which
are considered standard common CLI arguments by this package.

## Type declaration

### hush

> **hush**: `boolean`

### quiet

> **quiet**: `boolean`

### silent

> **silent**: `boolean`
