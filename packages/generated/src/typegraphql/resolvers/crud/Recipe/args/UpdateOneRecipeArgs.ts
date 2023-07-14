import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RecipeUpdateInput } from "../../../inputs/RecipeUpdateInput";
import { RecipeWhereUniqueInput } from "../../../inputs/RecipeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneRecipeArgs {
  @TypeGraphQL.Field(_type => RecipeUpdateInput, {
    nullable: false
  })
  data!: RecipeUpdateInput;

  @TypeGraphQL.Field(_type => RecipeWhereUniqueInput, {
    nullable: false
  })
  where!: RecipeWhereUniqueInput;
}
