[**@-xun/cli**](../../../README.md)

***

[@-xun/cli](../../../README.md) / [src/extensions](../README.md) / standardCommonCliArgumentsKeys

# Variable: standardCommonCliArgumentsKeys

> `const` **standardCommonCliArgumentsKeys**: (`"hush"` \| `"quiet"` \| `"silent"`)[]

Defined in: [src/extensions.ts:140](https://github.com/Xunnamius/cli-utils/blob/6bb867abfa52659ebcf7604aaf7635e72a00bf51/src/extensions.ts#L140)

This is an array of the keys in [standardCommonCliArguments](standardCommonCliArguments.md), each of
which have a one-to-one relation with a key of
[StandardCommonCliArguments](../type-aliases/StandardCommonCliArguments.md).

Note that this array purposely excludes `'help'` and `'version'`, which are
considered standard common CLI arguments by this package and are therefore
automatically included when appropriate.
