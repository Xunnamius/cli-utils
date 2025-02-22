[**@-xun/cli**](../../README.md)

***

[@-xun/cli](../../README.md) / [src](../README.md) / GracefulEarlyExitError

# Class: GracefulEarlyExitError

Defined in: node\_modules/@black-flag/core/dist/src/error.d.ts:107

Represents an exceptional event that should result in the immediate
termination of the application but with an exit code indicating success
(`0`).

## Extends

- [`CliError`](CliError.md)

## Constructors

### new GracefulEarlyExitError()

> **new GracefulEarlyExitError**(): [`GracefulEarlyExitError`](GracefulEarlyExitError.md)

Defined in: node\_modules/@black-flag/core/dist/src/error.d.ts:114

Represents an exceptional event that should result in the immediate
termination of the application but with an exit code indicating success
(`0`).

#### Returns

[`GracefulEarlyExitError`](GracefulEarlyExitError.md)

#### Overrides

[`CliError`](CliError.md).[`constructor`](CliError.md#constructors)

## Properties

### \[$type\]

> **\[$type\]**: `string`[]

Defined in: node\_modules/@black-flag/core/dist/src/error.d.ts:108

#### Overrides

[`CliError`](CliError.md).[`[$type]`](CliError.md#$type)

***

### cause?

> `optional` **cause**: `unknown`

Defined in: node\_modules/typescript/lib/lib.es2022.error.d.ts:26

#### Inherited from

[`CliError`](CliError.md).[`cause`](CliError.md#cause)

***

### dangerouslyFatal

> **dangerouslyFatal**: `boolean`

Defined in: node\_modules/@black-flag/core/dist/src/error.d.ts:78

This option is similar in intent to yargs's `exitProcess()` function,
except applied more granularly.

Normally, [runProgram](../functions/runProgram.md) never throws and never calls `process.exit`,
instead setting `process.exitCode` when an error occurs.

However, it is at times prudent to kill Node.js as soon as possible after
error handling happens. For example: the execa library struggles to abort
concurrent subcommand promises in a timely manner, and doesn't prevent them
from dumping output to stdout even after Black Flag has finished executing.
To work around this, we can set `dangerouslyFatal` to `true`, forcing Black
Flag to call `process.exit` immediately after error handling completes.

More generally, enabling `dangerouslyFatal` is a quick way to get rid of
strange behavior that can happen when your microtask queue isn't empty
(i.e. the event loop still has work to do) by the time Black Flag's error
handling code completes. **However, doing this without proper consideration
of _why_ you still have hanging promises and/or other microtasks adding
work to the event loop can lead to faulty/glitchy/flaky software and
heisenbugs.** You will also have to specially handle `process.exit` when
running unit/integration tests and executing command handlers within other
command handlers. Tread carefully.

#### Inherited from

[`CliError`](CliError.md).[`dangerouslyFatal`](CliError.md#dangerouslyfatal)

***

### message

> **message**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1077

#### Inherited from

[`CliError`](CliError.md).[`message`](CliError.md#message-1)

***

### name

> **name**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1076

#### Inherited from

[`CliError`](CliError.md).[`name`](CliError.md#name)

***

### showHelp

> **showHelp**: `boolean`

Defined in: node\_modules/@black-flag/core/dist/src/error.d.ts:77

If `true`, help text will be sent to stderr _before this exception finishes
bubbling_. Where the exception is thrown will determine which instance is
responsible for error text generation.

#### Default

```ts
false
```

#### Inherited from

[`CliError`](CliError.md).[`showHelp`](CliError.md#showhelp)

***

### stack?

> `optional` **stack**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1078

#### Inherited from

[`CliError`](CliError.md).[`stack`](CliError.md#stack)

***

### suggestedExitCode

> **suggestedExitCode**: [`FrameworkExitCode`](../enumerations/FrameworkExitCode.md)

Defined in: node\_modules/@black-flag/core/dist/src/error.d.ts:76

The exit code that will be returned when the application exits, given
nothing else goes wrong in the interim.

#### Default

```ts
FrameworkExitCode.DefaultError
```

#### Inherited from

[`CliError`](CliError.md).[`suggestedExitCode`](CliError.md#suggestedexitcode)

***

### prepareStackTrace()?

> `static` `optional` **prepareStackTrace**: (`err`, `stackTraces`) => `any`

Defined in: node\_modules/@types/node/globals.d.ts:143

Optional override for formatting stack traces

#### Parameters

##### err

`Error`

##### stackTraces

`CallSite`[]

#### Returns

`any`

#### See

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from

[`CliError`](CliError.md).[`prepareStackTrace`](CliError.md#preparestacktrace)

***

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

Defined in: node\_modules/@types/node/globals.d.ts:145

#### Inherited from

[`CliError`](CliError.md).[`stackTraceLimit`](CliError.md#stacktracelimit)

## Methods

### captureStackTrace()

> `static` **captureStackTrace**(`targetObject`, `constructorOpt`?): `void`

Defined in: node\_modules/@types/node/globals.d.ts:136

Create .stack property on a target object

#### Parameters

##### targetObject

`object`

##### constructorOpt?

`Function`

#### Returns

`void`

#### Inherited from

[`CliError`](CliError.md).[`captureStackTrace`](CliError.md#capturestacktrace)
