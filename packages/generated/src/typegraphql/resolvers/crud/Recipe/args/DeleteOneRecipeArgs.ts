import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RecipeWhereUniqueInput } from "../../../inputs/RecipeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneRecipeArgs {
  @TypeGraphQL.Field(_type => RecipeWhereUniqueInput, {
    nullable: false
  })
  where!: RecipeWhereUniqueInput;
}
