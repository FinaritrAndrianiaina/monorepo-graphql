import {buildSchema} from "type-graphql";
import {RecipeResolver} from "@ficommerce/graphql";
import {CreateOneRecipeResolver} from "@ficommerce/generated/gql";
import {GraphQLSchema} from "graphql/type";

export async function generateGQLSchema(): Promise<GraphQLSchema> {
    return await buildSchema({
        resolvers: [RecipeResolver, CreateOneRecipeResolver],
        emitSchemaFile: true
    });
}