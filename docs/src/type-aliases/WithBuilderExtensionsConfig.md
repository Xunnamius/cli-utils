[**@-xun/cli**](../../README.md)

***

[@-xun/cli](../../README.md) / [src](../README.md) / WithBuilderExtensionsConfig

# Type Alias: WithBuilderExtensionsConfig\<CustomCliArguments\>

> **WithBuilderExtensionsConfig**\<`CustomCliArguments`\> = `object`

Defined in: node\_modules/@black-flag/extensions/dist/packages/extensions/src/index.d.ts:402

A configuration object that further configures the behavior of
[withBuilderExtensions](../functions/withBuilderExtensions.md).

## Type Parameters

### CustomCliArguments

`CustomCliArguments` *extends* `Record`\<`string`, `unknown`\>

## Properties

### commonOptions?

> `optional` **commonOptions**: readonly `LiteralUnion`\<keyof `CustomCliArguments` \| `"help"` \| `"version"`, `string`\>[]

Defined in: node\_modules/@black-flag/extensions/dist/packages/extensions/src/index.d.ts:435

An array of zero or more string keys of `CustomCliArguments`, with the
optional addition of `'help'` and `'version'`, that should be grouped under
_"Common Options"_ when [automatic grouping of related
options](https://github.com/Xunnamius/black-flag/blob/main/packages/extensions/README.md#automatic-sorting-of-options)
is enabled.

This setting is ignored if `disableAutomaticGrouping === true`.

#### Default

```ts
['help']
```

***

### disableAutomaticGrouping?

> `optional` **disableAutomaticGrouping**: `boolean`

Defined in: node\_modules/@black-flag/extensions/dist/packages/extensions/src/index.d.ts:413

Set to `true` to disable BFE's support for automatic grouping of related
options.

See [the
documentation](https://github.com/Xunnamius/black-flag/blob/main/packages/extensions/README.md#automatic-grouping-of-related-options)
for details.

#### Default

```ts
false
```

***

### enableAutomaticSorting?

> `optional` **enableAutomaticSorting**: `boolean`

Defined in: node\_modules/@black-flag/extensions/dist/packages/extensions/src/index.d.ts:423

Set to `true` to enable BFE's support for automatic sorting of options.

See [the
documentation](https://github.com/Xunnamius/black-flag/blob/main/packages/extensions/README.md#automatic-sorting-of-options)
for details.

#### Default

```ts
false
```
