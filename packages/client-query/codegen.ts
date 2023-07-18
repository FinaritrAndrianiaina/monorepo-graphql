
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "../../schema/schema.gql",
  documents: ['../../documents/**/*.{gql,graphql}'],
  ignoreNoDocuments: true,
  generates: {
    "./gql/": {
      "preset":"client",
      "plugins": [],
      "config":{
        "documentNode":"string",
        "useTypeImports":false
      },
      "presetConfig": {
        "fragmentMasking": false
      }
    }
  }
};

export default config;
