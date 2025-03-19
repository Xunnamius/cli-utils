[**@-xun/cli**](../../../README.md)

***

[@-xun/cli](../../../README.md) / [src/extensions](../README.md) / withStandardBuilder

# Function: withStandardBuilder()

> **withStandardBuilder**\<`CustomCliArguments`, `CustomExecutionContext`\>(`customBuilder`?, `__namedParameters`?): [`WithBuilderExtensionsReturnType`](../../type-aliases/WithBuilderExtensionsReturnType.md)\<`CustomCliArguments`, `CustomExecutionContext`\>

Defined in: [src/extensions.ts:165](https://github.com/Xunnamius/cli-utils/blob/f6fb27d968b4a76d51942bf6bd7e72fa69147ef1/src/extensions.ts#L165)

This function enables several options-related units of functionality
considered standard across [Xunnamius](https://github.com/Xunnamius)'s CLI
projects.

This function is a relatively thin wrapper around
[withBuilderExtensions](../../functions/withBuilderExtensions.md). It also disables
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

### CustomCliArguments

`CustomCliArguments` *extends* [`StandardCommonCliArguments`](../type-aliases/StandardCommonCliArguments.md)

### CustomExecutionContext

`CustomExecutionContext` *extends* [`StandardExecutionContext`](../type-aliases/StandardExecutionContext.md)

## Parameters

### customBuilder?

[`BfeBuilderObject`](../../type-aliases/BfeBuilderObject.md)\<`CustomCliArguments`, `CustomExecutionContext`\> | (...`args`) => `void` \| [`BfeBuilderObject`](../../type-aliases/BfeBuilderObject.md)\<`CustomCliArguments`, `CustomExecutionContext`\>

### \_\_namedParameters?

`Omit`\<[`WithBuilderExtensionsConfig`](../../type-aliases/WithBuilderExtensionsConfig.md)\<`CustomCliArguments`\>, `"commonOptions"` \| `"enableAutomaticSorting"`\> & `object` = `{}`

## Returns

[`WithBuilderExtensionsReturnType`](../../type-aliases/WithBuilderExtensionsReturnType.md)\<`CustomCliArguments`, `CustomExecutionContext`\>
