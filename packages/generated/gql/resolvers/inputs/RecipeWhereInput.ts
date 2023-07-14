import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../db";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("RecipeWhereInput", {})
export class RecipeWhereInput {
  @TypeGraphQL.Field(_type => [RecipeWhereInput], {
    nullable: true
  })
  AND?: RecipeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RecipeWhereInput], {
    nullable: true
  })
  OR?: RecipeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RecipeWhereInput], {
    nullable: true
  })
  NOT?: RecipeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  title?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  decription?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  creationDate?: DateTimeFilter | undefined;
}
