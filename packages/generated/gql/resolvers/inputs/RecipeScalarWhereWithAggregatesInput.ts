import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../db";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("RecipeScalarWhereWithAggregatesInput", {})
export class RecipeScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [RecipeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: RecipeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [RecipeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: RecipeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [RecipeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: RecipeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  title?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  decription?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  creationDate?: DateTimeWithAggregatesFilter | undefined;
}
