[**@-xun/cli**](../../README.md)

***

[@-xun/cli](../../README.md) / [src](../README.md) / WithUsageExtensionsConfig

# Type Alias: WithUsageExtensionsConfig

> **WithUsageExtensionsConfig** = `object`

Defined in: node\_modules/@black-flag/extensions/dist/packages/extensions/src/index.d.ts:441

A configuration object that further configures the behavior of
[withUsageExtensions](../functions/withUsageExtensions.md).

## Properties

### altDescription?

> `optional` **altDescription**: `string`

Defined in: node\_modules/@black-flag/extensions/dist/packages/extensions/src/index.d.ts:448

The result of calling this function defaults to: `Usage:
$000\n\n${altDescription}`.

#### Default

```ts
"$1."
```

***

### appendPeriod?

> `optional` **appendPeriod**: `boolean`

Defined in: node\_modules/@black-flag/extensions/dist/packages/extensions/src/index.d.ts:461

Whether a period will be appended to the resultant string or not. A
period is only appended if one is not already appended.

#### Default

```ts
true
```

***

### includeOptions?

> `optional` **includeOptions**: `boolean`

Defined in: node\_modules/@black-flag/extensions/dist/packages/extensions/src/index.d.ts:474

Whether the string `' [...options]'` will be appended to the first line
of usage text (after `includeSubCommand`).

#### Default

```ts
options.prependNewlines
```

***

### includeSubCommand?

> `optional` **includeSubCommand**: `boolean` \| `"required"`

Defined in: node\_modules/@black-flag/extensions/dist/packages/extensions/src/index.d.ts:482

Whether some variation of the string `' [subcommand]'` will be appended
to the first line of usage text (before `includeOptions`). Set to `true`
or `required` when generating usage for a command with subcommands.

#### Default

```ts
false
```

***

### prependNewlines?

> `optional` **prependNewlines**: `boolean`

Defined in: node\_modules/@black-flag/extensions/dist/packages/extensions/src/index.d.ts:467

Whether newlines will be prepended to `altDescription` or not.

#### Default

```ts
true
```

***

### trim?

> `optional` **trim**: `boolean`

Defined in: node\_modules/@black-flag/extensions/dist/packages/extensions/src/index.d.ts:454

Whether `altDescription` will be `trim()`'d or not.

#### Default

```ts
true
```
