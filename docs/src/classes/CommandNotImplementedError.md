[**@-xun/cli**](../../README.md)

***

[@-xun/cli](../../README.md) / [src](../README.md) / CommandNotImplementedError

# Class: CommandNotImplementedError

Defined in: node\_modules/@black-flag/core/dist/src/error.d.ts:121

Represents trying to execute a CLI command that has not yet been implemented.

## Extends

- [`CliError`](CliError.md)

## Constructors

### Constructor

> **new CommandNotImplementedError**(`error?`, `options?`): `CommandNotImplementedError`

Defined in: node\_modules/@black-flag/core/dist/src/error.d.ts:127

Represents trying to execute a CLI command that has not yet been
implemented.

#### Parameters

##### error?

`Error`

##### options?

[`CliErrorOptions`](../type-aliases/CliErrorOptions.md)

#### Returns

`CommandNotImplementedError`

#### Overrides

[`CliError`](CliError.md).[`constructor`](CliError.md#constructor)

## Properties

### \[$type\]

> **\[$type\]**: `string`[]

Defined in: node\_modules/@black-flag/core/dist/src/error.d.ts:122

#### Overrides

[`CliError`](CliError.md).[`[$type]`](CliError.md#type)

***

### cause?

> `optional` **cause**: `unknown`

Defined in: node\_modules/typescript/lib/lib.es2022.error.d.ts:26

#### Inherited from

[`CliError`](CliError.md).[`cause`](CliError.md#cause)

***

### dangerouslyFatal

> **dangerouslyFatal**: `boolean`

Defined in: node\_modules/@black-flag/core/dist/src/error.d.ts:105

This option is similar in intent to Yargs's `exitProcess()` function,
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

#### Default

```ts
false
```

#### Inherited from

[`CliError`](CliError.md).[`dangerouslyFatal`](CliError.md#dangerouslyfatal)

***

### message

> **message**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1077

#### Inherited from

[`CliError`](CliError.md).[`message`](CliError.md#message)

***

### name

> **name**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1076

#### Inherited from

[`CliError`](CliError.md).[`name`](CliError.md#name)

***

### showHelp

> **showHelp**: `NonNullable`\<`undefined` \| `false` \| `"full"` \| `"short"` \| `"default"`\>

Defined in: node\_modules/@black-flag/core/dist/src/error.d.ts:104

If `showHelp` is set to a string that isn't `"default"`, help text will be
sent to stderr. Note that help text is always sent _before this exception
finishes bubbling up to `ConfigureErrorHandlingEpilogue`_.

Specifically, if `showHelp` is set to `"full"`, the full help text will be
sent to stderr, including the entire `usage` string. If set to `"short"`
(or `true`), the same help text will be sent to stderr except only the
first line of usage will be included. In either case, help text will be
sent to stderr regardless of the value of
[ExecutionContext.state.showHelpOnFail](https://github.com/Xunnamius/black-flag/blob/main/docs/api/src/exports/util/type-aliases/ExecutionContext.md#showhelponfail).

Alternatively, if set to `"default"`, the value of
[ExecutionContext.state.showHelpOnFail](https://github.com/Xunnamius/black-flag/blob/main/docs/api/src/exports/util/type-aliases/ExecutionContext.md#showhelponfail)
will be used. And if set to `false`, no help text will be sent to stderr
due to this error regardless of the value of
[ExecutionContext.state.showHelpOnFail](https://github.com/Xunnamius/black-flag/blob/main/docs/api/src/exports/util/type-aliases/ExecutionContext.md#showhelponfail).

Note that, regardless of this `showHelp`, help text is always output when a
parent command is invoked that (1) has one or more child commands and (2)
lacks its own handler implementation or implements a handler that throws
CommandNotImplementedError.

#### Default

```ts
"default"
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

Defined in: node\_modules/@black-flag/core/dist/src/error.d.ts:103

The exit code that will be returned when the application exits, given
nothing else goes wrong in the interim.

#### Default

```ts
FrameworkExitCode.DefaultError
```

#### Inherited from

[`CliError`](CliError.md).[`suggestedExitCode`](CliError.md#suggestedexitcode)

***

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

Defined in: node\_modules/@types/node/globals.d.ts:161

The `Error.stackTraceLimit` property specifies the number of stack frames
collected by a stack trace (whether generated by `new Error().stack` or
`Error.captureStackTrace(obj)`).

The default value is `10` but may be set to any valid JavaScript number. Changes
will affect any stack trace captured _after_ the value has been changed.

If set to a non-number value, or set to a negative number, stack traces will
not capture any frames.

#### Inherited from

[`CliError`](CliError.md).[`stackTraceLimit`](CliError.md#stacktracelimit)

## Methods

### captureStackTrace()

> `static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Defined in: node\_modules/@types/node/globals.d.ts:145

Creates a `.stack` property on `targetObject`, which when accessed returns
a string representing the location in the code at which
`Error.captureStackTrace()` was called.

```js
const myObject = {};
Error.captureStackTrace(myObject);
myObject.stack;  // Similar to `new Error().stack`
```

The first line of the trace will be prefixed with
`${myObject.name}: ${myObject.message}`.

The optional `constructorOpt` argument accepts a function. If given, all frames
above `constructorOpt`, including `constructorOpt`, will be omitted from the
generated stack trace.

The `constructorOpt` argument is useful for hiding implementation
details of error generation from the user. For instance:

```js
function a() {
  b();
}

function b() {
  c();
}

function c() {
  // Create an error without stack trace to avoid calculating the stack trace twice.
  const { stackTraceLimit } = Error;
  Error.stackTraceLimit = 0;
  const error = new Error();
  Error.stackTraceLimit = stackTraceLimit;

  // Capture the stack trace above function b
  Error.captureStackTrace(error, b); // Neither function c, nor b is included in the stack trace
  throw error;
}

a();
```

#### Parameters

##### targetObject

`object`

##### constructorOpt?

`Function`

#### Returns

`void`

#### Inherited from

[`CliError`](CliError.md).[`captureStackTrace`](CliError.md#capturestacktrace)

***

### prepareStackTrace()

> `static` **prepareStackTrace**(`err`, `stackTraces`): `any`

Defined in: node\_modules/@types/node/globals.d.ts:149

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
