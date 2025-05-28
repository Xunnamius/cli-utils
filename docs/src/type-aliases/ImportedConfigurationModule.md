[**@-xun/cli**](../../README.md)

***

[@-xun/cli](../../README.md) / [src](../README.md) / ImportedConfigurationModule

# Type Alias: ImportedConfigurationModule\<CustomCliArguments, CustomExecutionContext\>

> **ImportedConfigurationModule**\<`CustomCliArguments`, `CustomExecutionContext`\> = (`context`) => `Promisable`\<`Partial`\<[`RootConfiguration`](RootConfiguration.md)\<`CustomCliArguments`, `CustomExecutionContext`\> \| [`ParentConfiguration`](ParentConfiguration.md)\<`CustomCliArguments`, `CustomExecutionContext`\>\>\> \| `Partial`\<[`RootConfiguration`](RootConfiguration.md)\<`CustomCliArguments`, `CustomExecutionContext`\> \| [`ParentConfiguration`](ParentConfiguration.md)\<`CustomCliArguments`, `CustomExecutionContext`\>\> & `object`

Defined in: node\_modules/@black-flag/core/dist/src/types/module.d.ts:137

Represents a [Configuration](Configuration.md) object imported from a CJS/ESM module
external to the CLI framework (e.g. importing an auto-discovered config
module from a file).

## Type declaration

### default?

> `optional` **default**: `ImportedConfigurationModule`\<`CustomCliArguments`, `CustomExecutionContext`\>

## Type Parameters

### CustomCliArguments

`CustomCliArguments` *extends* `Record`\<`string`, `unknown`\> = `Record`\<`string`, `unknown`\>

### CustomExecutionContext

`CustomExecutionContext` *extends* [`ExecutionContext`](ExecutionContext.md) = [`ExecutionContext`](ExecutionContext.md)
