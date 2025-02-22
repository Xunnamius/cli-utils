[**@-xun/cli**](../../README.md)

***

[@-xun/cli](../../README.md) / [src](../README.md) / ProgramMetadata

# Type Alias: ProgramMetadata

> **ProgramMetadata**: `object`

Defined in: node\_modules/@black-flag/core/dist/types/program.d.ts:100

Represents the meta information about a discovered command and its
corresponding [Configuration](Configuration.md) object/file.

## Type declaration

### filename

> **filename**: `string`

The basename of `filepath`.

### filenameWithoutExtension

> **filenameWithoutExtension**: `string`

The basename of `filepath` with the trailing extension trimmed.

### filepath

> **filepath**: `string`

Absolute filesystem path to the loaded configuration file.

### hasChildren

> **hasChildren**: `boolean`

If `true`, this command is a "pure parent" or "parent-child" that has at
least one child command.

### isImplemented

> **isImplemented**: `boolean`

If `true`, this command exported neither a `command` string nor a `handler`
function. Black Flag therefore considers this command "unimplemented".

When executed, unimplemented commands will show help text before throwing a
context-specific error.

### parentDirName

> **parentDirName**: `string`

The basename of the direct parent directory containing `filepath`.

### reservedCommandNames

> **reservedCommandNames**: `string`[]

The names "reserved" by this command. When a name is reserved by a command,
no other sibling command (i.e. a command with the same parent command) can
use that name as an name or alias. When attempting to add a command that
uses the same name as its sibling, an error with be thrown.

All commands attempt to reserve their `name` and `aliases` exports upon
discovery.

**Invariant: `name` must be at index 0; `...aliases` must start at index
1.**

### type

> **type**: [`ProgramType`](ProgramType.md)

The "type" of [Configuration](Configuration.md) that was loaded, indicating which
interface to expect when interacting with `configuration`. The
possibilities are:

- **root**: implements `RootConfiguration` (the only pure
  `ParentConfiguration`)
- **parent-child**: implements `ParentConfiguration`, `ChildConfiguration`
- **child**: implements `ChildConfiguration`

Note that "root" `type` configurations are unique in that there will only
ever be one `RootConfiguration`, and it **MUST** be the first command
module auto-discovered and loaded (invariant).
