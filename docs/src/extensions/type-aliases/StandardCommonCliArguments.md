[**@-xun/cli**](../../../README.md)

***

[@-xun/cli](../../../README.md) / [src/extensions](../README.md) / StandardCommonCliArguments

# Type Alias: StandardCommonCliArguments

> **StandardCommonCliArguments** = `object`

Defined in: [src/extensions.ts:99](https://github.com/Xunnamius/cli-utils/blob/682abac4b6c3e5d4332a000231005349474476be/src/extensions.ts#L99)

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

Defined in: [src/extensions.ts:100](https://github.com/Xunnamius/cli-utils/blob/682abac4b6c3e5d4332a000231005349474476be/src/extensions.ts#L100)

***

### quiet

> **quiet**: `boolean`

Defined in: [src/extensions.ts:101](https://github.com/Xunnamius/cli-utils/blob/682abac4b6c3e5d4332a000231005349474476be/src/extensions.ts#L101)

***

### silent

> **silent**: `boolean`

Defined in: [src/extensions.ts:102](https://github.com/Xunnamius/cli-utils/blob/682abac4b6c3e5d4332a000231005349474476be/src/extensions.ts#L102)
