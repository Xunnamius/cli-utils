[**@-xun/cli**](../../../README.md)

***

[@-xun/cli](../../../README.md) / [src/extensions](../README.md) / StandardCommonCliArguments

# Type Alias: StandardCommonCliArguments

> **StandardCommonCliArguments** = `object`

Defined in: [src/extensions.ts:93](https://github.com/Xunnamius/cli-utils/blob/3e95f8ce42185c7633feda8038393f1d5d6e79dd/src/extensions.ts#L93)

These properties will be available in the `argv` object of any command that
uses [withStandardBuilder](../functions/withStandardBuilder.md) to construct its `builder`.

This type is manually synchronized with [standardCommonCliArguments](../variables/standardCommonCliArguments.md),
but the keys may differ slightly (e.g. hyphens may be elided in favor of
camelCase).

Note that this type purposely excludes the `help` and `version` keys, which
are considered standard common CLI arguments by this package.

## Properties

### hush

> **hush**: `boolean`

Defined in: [src/extensions.ts:94](https://github.com/Xunnamius/cli-utils/blob/3e95f8ce42185c7633feda8038393f1d5d6e79dd/src/extensions.ts#L94)

***

### quiet

> **quiet**: `boolean`

Defined in: [src/extensions.ts:95](https://github.com/Xunnamius/cli-utils/blob/3e95f8ce42185c7633feda8038393f1d5d6e79dd/src/extensions.ts#L95)

***

### silent

> **silent**: `boolean`

Defined in: [src/extensions.ts:96](https://github.com/Xunnamius/cli-utils/blob/3e95f8ce42185c7633feda8038393f1d5d6e79dd/src/extensions.ts#L96)
