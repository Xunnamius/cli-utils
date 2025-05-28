[**@-xun/cli**](../../README.md)

***

[@-xun/cli](../../README.md) / [src](../README.md) / withUsageExtensions

# Function: withUsageExtensions()

> **withUsageExtensions**(`__namedParameters?`): `string`

Defined in: node\_modules/@black-flag/extensions/dist/packages/extensions/src/index.d.ts:455

Generate command usage text consistently yet flexibly.

Defaults to: `Usage: $000\n\n${altDescription}` where `altDescription` is
`"$1."`.

## Parameters

### \_\_namedParameters?

#### altDescription?

`string`

The result of calling this function defaults to: `Usage:
$000\n\n${altDescription}`.

**Default**

```ts
"$1."
```

#### appendPeriod?

`boolean`

Whether a period will be appended to the resultant string or not. A
period is only appended if one is not already appended.

**Default**

```ts
true
```

#### includeOptions?

`boolean`

Whether the string `' [...options]'` will be appended to the first line
of usage text (after `includeSubCommand`).

**Default**

```ts
options.prependNewlines
```

#### includeSubCommand?

`boolean` \| `"required"`

Whether some variation of the string `' [subcommand]'` will be appended
to the first line of usage text (before `includeOptions`). Set to `true`
or `required` when generating usage for a command with subcommands.

**Default**

```ts
false
```

#### prependNewlines?

`boolean`

Whether newlines will be prepended to `altDescription` or not.

**Default**

```ts
true
```

#### trim?

`boolean`

Whether `altDescription` will be `trim()`'d or not.

**Default**

```ts
true
```

## Returns

`string`
