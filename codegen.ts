import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
    schema: './schema.graphqls',
    generates: {
        './src/graphql/schema-types.generated.ts': {
            plugins: ['typescript', 'typescript-resolvers']
        }
    }
}
export default config