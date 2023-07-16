
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "../../schema/schema.gql",
  documents: ['../../documents/**/*.{gql,graphql}'],
  ignoreNoDocuments: true,
  generates: {
    "./types/": {
      "preset":"client",
      "plugins": [],
      "config":{
        "documentNode":"string"
      }
    }
  },
};

export default config;
