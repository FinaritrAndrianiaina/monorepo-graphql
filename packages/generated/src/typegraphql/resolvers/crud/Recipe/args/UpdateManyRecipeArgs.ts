import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RecipeUpdateManyMutationInput } from "../../../inputs/RecipeUpdateManyMutationInput";
import { RecipeWhereInput } from "../../../inputs/RecipeWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyRecipeArgs {
  @TypeGraphQL.Field(_type => RecipeUpdateManyMutationInput, {
    nullable: false
  })
  data!: RecipeUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => RecipeWhereInput, {
    nullable: true
  })
  where?: RecipeWhereInput | undefined;
}
