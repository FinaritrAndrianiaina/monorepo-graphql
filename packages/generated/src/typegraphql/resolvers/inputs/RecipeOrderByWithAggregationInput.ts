import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RecipeCountOrderByAggregateInput } from "../inputs/RecipeCountOrderByAggregateInput";
import { RecipeMaxOrderByAggregateInput } from "../inputs/RecipeMaxOrderByAggregateInput";
import { RecipeMinOrderByAggregateInput } from "../inputs/RecipeMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("RecipeOrderByWithAggregationInput", {})
export class RecipeOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  decription?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  creationDate?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => RecipeCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: RecipeCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RecipeMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: RecipeMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RecipeMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: RecipeMinOrderByAggregateInput | undefined;
}
