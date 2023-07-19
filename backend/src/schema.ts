import {buildSchema} from "type-graphql";
import {RecipeResolver, AuthChecker} from "@ficommerce/graphql";
import {CreateOneRecipeResolver, FindManyProfilesResolver} from "@ficommerce/generated/gql";
import {GraphQLSchema} from "graphql/type";
import * as path from "path";

export async function generateGQLSchema(): Promise<GraphQLSchema> {
    return await buildSchema({
        resolvers: [RecipeResolver, CreateOneRecipeResolver, FindManyProfilesResolver],
        emitSchemaFile: path.resolve(__dirname, "../../schema", "schema.gql"),
        authChecker: AuthChecker,
        authMode: "error"
    });
}