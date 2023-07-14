import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RecipeCreateInput } from "../../../inputs/RecipeCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneRecipeArgs {
  @TypeGraphQL.Field(_type => RecipeCreateInput, {
    nullable: false
  })
  data!: RecipeCreateInput;
}
