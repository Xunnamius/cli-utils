[**@-xun/cli**](../../README.md)

***

[@-xun/cli](../../README.md) / [src](../README.md) / withUsageExtensions

# Function: withUsageExtensions()

## Call Signature

> **withUsageExtensions**(`altDescription?`): `string`

Defined in: node\_modules/@black-flag/extensions/dist/packages/extensions/src/index.d.ts:502

Generate command usage text consistently yet flexibly.

Defaults to: `Usage: $000\n\n${altDescription}` where `altDescription` is
`"$1."`.

### Parameters

#### altDescription?

`string`

### Returns

`string`

## Call Signature

> **withUsageExtensions**(`altDescription?`, `config?`): `string`

Defined in: node\_modules/@black-flag/extensions/dist/packages/extensions/src/index.d.ts:503

Generate command usage text consistently yet flexibly.

Defaults to: `Usage: $000\n\n${altDescription}` where `altDescription` is
`"$1."`.

### Parameters

#### altDescription?

`string`

#### config?

`Omit`\<[`WithUsageExtensionsConfig`](../type-aliases/WithUsageExtensionsConfig.md), `"altDescription"`\>

### Returns

`string`

## Call Signature

> **withUsageExtensions**(`config?`): `string`

Defined in: node\_modules/@black-flag/extensions/dist/packages/extensions/src/index.d.ts:504

Generate command usage text consistently yet flexibly.

Defaults to: `Usage: $000\n\n${altDescription}` where `altDescription` is
`"$1."`.

### Parameters

#### config?

[`WithUsageExtensionsConfig`](../type-aliases/WithUsageExtensionsConfig.md)

### Returns

`string`

## Call Signature

> **withUsageExtensions**(`config?`, `moreConfig?`): `string`

Defined in: node\_modules/@black-flag/extensions/dist/packages/extensions/src/index.d.ts:505

Generate command usage text consistently yet flexibly.

Defaults to: `Usage: $000\n\n${altDescription}` where `altDescription` is
`"$1."`.

### Parameters

#### config?

`string` | [`WithUsageExtensionsConfig`](../type-aliases/WithUsageExtensionsConfig.md)

#### moreConfig?

`Omit`\<[`WithUsageExtensionsConfig`](../type-aliases/WithUsageExtensionsConfig.md), `"altDescription"`\>

### Returns

`string`
