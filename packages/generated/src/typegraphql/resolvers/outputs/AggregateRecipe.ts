import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RecipeCountAggregate } from "../outputs/RecipeCountAggregate";
import { RecipeMaxAggregate } from "../outputs/RecipeMaxAggregate";
import { RecipeMinAggregate } from "../outputs/RecipeMinAggregate";

@TypeGraphQL.ObjectType("AggregateRecipe", {})
export class AggregateRecipe {
  @TypeGraphQL.Field(_type => RecipeCountAggregate, {
    nullable: true
  })
  _count!: RecipeCountAggregate | null;

  @TypeGraphQL.Field(_type => RecipeMinAggregate, {
    nullable: true
  })
  _min!: RecipeMinAggregate | null;

  @TypeGraphQL.Field(_type => RecipeMaxAggregate, {
    nullable: true
  })
  _max!: RecipeMaxAggregate | null;
}
