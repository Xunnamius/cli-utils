[**@-xun/cli**](../../README.md)

***

[@-xun/cli](../../README.md) / [src](../README.md) / FactoriedRunProgramParameters

# Type Alias: FactoriedRunProgramParameters

> **FactoriedRunProgramParameters** = `RunProgramParametersWithAny` *extends* \[infer \_, `...(infer Tail)`\] ? `Tail` : \[\]

Defined in: node\_modules/@black-flag/core/dist/src/index.d.ts:27

The available call signature parameters of the low-order function returned by
[makeRunner](../functions/makeRunner.md).

This is the same thing as [RunProgramParameters](RunProgramParameters.md) but with the first
parameter (i.e. the `commandModulesPath` string) omitted.
