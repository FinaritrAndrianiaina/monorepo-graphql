import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RecipeOrderByWithRelationInput } from "../../../inputs/RecipeOrderByWithRelationInput";
import { RecipeWhereInput } from "../../../inputs/RecipeWhereInput";
import { RecipeWhereUniqueInput } from "../../../inputs/RecipeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateRecipeArgs {
  @TypeGraphQL.Field(_type => RecipeWhereInput, {
    nullable: true
  })
  where?: RecipeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [RecipeOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: RecipeOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => RecipeWhereUniqueInput, {
    nullable: true
  })
  cursor?: RecipeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
