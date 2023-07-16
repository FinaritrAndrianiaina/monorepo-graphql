"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    overwrite: true,
    schema: "../../schema/schema.gql",
    documents: ['../../documents/**/*.{gql,graphql}'],
    ignoreNoDocuments: true,
    generates: {
        "./types/": {
            "preset": "client",
            "plugins": [],
            "config": {
                "documentMode": "string"
            }
        }
    },
};
exports.default = config;
//# sourceMappingURL=codegen.js.map