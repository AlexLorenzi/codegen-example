# CodeGen `noUnusedParameters` Issue
Steps to reproduce
1. yarn
2. yarn generate
3. yarn tsc

Expectation is that the genrated code should compile correctly, however, there is a error raised

```
src/graphql/schema-types.generated.ts:114:36 - error TS6133: 'RefType' is declared but its value is never read.

114 export type ResolversInterfaceTypes<RefType extends Record<string, unknown>> = {
```