import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RecipeCreateInput } from "../../../inputs/RecipeCreateInput";
import { RecipeUpdateInput } from "../../../inputs/RecipeUpdateInput";
import { RecipeWhereUniqueInput } from "../../../inputs/RecipeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneRecipeArgs {
  @TypeGraphQL.Field(_type => RecipeWhereUniqueInput, {
    nullable: false
  })
  where!: RecipeWhereUniqueInput;

  @TypeGraphQL.Field(_type => RecipeCreateInput, {
    nullable: false
  })
  create!: RecipeCreateInput;

  @TypeGraphQL.Field(_type => RecipeUpdateInput, {
    nullable: false
  })
  update!: RecipeUpdateInput;
}
