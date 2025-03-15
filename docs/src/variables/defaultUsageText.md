[**@-xun/cli**](../../README.md)

***

[@-xun/cli](../../README.md) / [src](../README.md) / defaultUsageText

# Variable: defaultUsageText

> `const` **defaultUsageText**: "Usage: $000\n\n$1" = `"Usage: $000\n\n$1"`

Defined in: node\_modules/@black-flag/core/dist/src/constant.d.ts:20

Hard-coded default command `usage` text provided to programs via
`.usage(...)` after string interpolation. "$000", "$0", and "$1" are replaced
with a command's usage DSL (i.e. `command` export), name (i.e. `name`
export), and description (i.e. `description` export) respectively.
