import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RecipeWhereInput } from "../../../inputs/RecipeWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyRecipeArgs {
  @TypeGraphQL.Field(_type => RecipeWhereInput, {
    nullable: true
  })
  where?: RecipeWhereInput | undefined;
}
