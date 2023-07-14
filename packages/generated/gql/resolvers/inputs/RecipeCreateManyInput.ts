import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../db";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("RecipeCreateManyInput", {})
export class RecipeCreateManyInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  decription?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  creationDate?: Date | undefined;
}
