[**@-xun/cli**](../../README.md)

***

[@-xun/cli](../../README.md) / [src](../README.md) / BfeSubOptionOfExtensionValue

# Type Alias: BfeSubOptionOfExtensionValue\<CustomCliArguments, CustomExecutionContext\>

> **BfeSubOptionOfExtensionValue**\<`CustomCliArguments`, `CustomExecutionContext`\>: `object`

Defined in: node\_modules/@black-flag/extensions/dist/src/index.d.ts:284

The array element type of
[BfeBuilderObjectValueExtensions.subOptionOf](BfeBuilderObjectValueExtensions.md#suboptionof).

## Type Parameters

• **CustomCliArguments** *extends* `Record`\<`string`, `unknown`\>

• **CustomExecutionContext** *extends* [`ExecutionContext`](ExecutionContext.md)

## Type declaration

### update

> **update**: (`oldOptionConfig`, `argv`) => [`BfeBuilderObjectValueWithoutSubOptionOfExtension`](BfeBuilderObjectValueWithoutSubOptionOfExtension.md)\<`CustomCliArguments`, `CustomExecutionContext`\> \| [`BfeBuilderObjectValueWithoutSubOptionOfExtension`](BfeBuilderObjectValueWithoutSubOptionOfExtension.md)\<`CustomCliArguments`, `CustomExecutionContext`\>

This function receives the current configuration for this option
(`oldOptionConfig`) and the fully parsed `argv` (not including any default
values), and must return the new configuration for this option.

This configuration will completely overwrite the old configuration. To
extend the old configuration instead, spread it. For example:

```javascript
return {
  ...oldOptionConfig,
  description: 'New description'
}
```

### when()

> **when**: (`superOptionValue`, `argv`) => `boolean`

This function receives the `superOptionValue` of the so-called "super
option" (i.e. `key` in `{ subOptionOf: { key: { when: ... }}}`), which you
are free to type as you please, and the fully parsed `argv` (not including
any default values). This function must return a boolean indicating whether
the `update` function should run or not.

Note that this function is only invoked if the super option is given on the
command line. If it is not, neither this function nor `update` will ever
run. Therefore, if your updater should run whenever the super option is
given, regardless of its value, it is acceptable to use `{ when: () => true
}`

#### Parameters

##### superOptionValue

`any`

##### argv

[`Arguments`](Arguments.md)\<`CustomCliArguments`, `CustomExecutionContext`\>

#### Returns

`boolean`
