import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RecipeOrderByWithAggregationInput } from "../../../inputs/RecipeOrderByWithAggregationInput";
import { RecipeScalarWhereWithAggregatesInput } from "../../../inputs/RecipeScalarWhereWithAggregatesInput";
import { RecipeWhereInput } from "../../../inputs/RecipeWhereInput";
import { RecipeScalarFieldEnum } from "../../../../enums/RecipeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByRecipeArgs {
  @TypeGraphQL.Field(_type => RecipeWhereInput, {
    nullable: true
  })
  where?: RecipeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [RecipeOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: RecipeOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [RecipeScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "title" | "decription" | "creationDate">;

  @TypeGraphQL.Field(_type => RecipeScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: RecipeScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
