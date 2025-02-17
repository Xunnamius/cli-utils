[**@-xun/cli**](../../../README.md)

***

[@-xun/cli](../../../README.md) / [src/extensions](../README.md) / withStandardBuilder

# Function: withStandardBuilder()

> **withStandardBuilder**\<`CustomCliArguments`, `CustomExecutionContext`\>(`customBuilder`?, `__namedParameters`?): `WithBuilderExtensionsReturnType`\<`CustomCliArguments`, `CustomExecutionContext`\>

Defined in: [src/extensions.ts:165](https://github.com/Xunnamius/cli-utils/blob/74bfa47fc80f4ebda9a4e0fb9b2b0d112ef3baed/src/extensions.ts#L165)

This function enables several options-related units of functionality
considered standard across [Xunnamius](https://github.com/Xunnamius)'s CLI
projects.

This function is a relatively thin wrapper around
withBuilderExtensions. It also disables
[`duplicate-arguments-array`](https://github.com/yargs/yargs-parser?tab=readme-ov-file#duplicate-arguments-array)
and enables
[`strip-dashed`](https://github.com/yargs/yargs-parser?tab=readme-ov-file#strip-dashed)
and
[`strip-aliased`](https://github.com/yargs/yargs-parser?tab=readme-ov-file#strip-aliased)
in yargs-parser.

When providing a `customBuilder` function or object, any key in the returned
object that is also a key in [standardCommonCliArguments](../variables/standardCommonCliArguments.md) will have its
value merged with the value in [standardCommonCliArguments](../variables/standardCommonCliArguments.md) _instead_
of fully overwriting it. This means you can pass minimal configuration values
for the keys that are also in [standardCommonCliArguments](../variables/standardCommonCliArguments.md) and those
values will be shallowly merged.

## Type Parameters

• **CustomCliArguments** *extends* [`StandardCommonCliArguments`](../type-aliases/StandardCommonCliArguments.md)

• **CustomExecutionContext** *extends* [`StandardExecutionContext`](../type-aliases/StandardExecutionContext.md)

## Parameters

### customBuilder?

`BfeBuilderObject`\<`CustomCliArguments`, `CustomExecutionContext`\> | (...`args`) => `void` \| `BfeBuilderObject`\<`CustomCliArguments`, `CustomExecutionContext`\>

### \_\_namedParameters?

`Omit`\<`WithBuilderExtensionsConfig`\<`CustomCliArguments`\>, `"commonOptions"`\> & `object` = `{}`

## Returns

`WithBuilderExtensionsReturnType`\<`CustomCliArguments`, `CustomExecutionContext`\>
