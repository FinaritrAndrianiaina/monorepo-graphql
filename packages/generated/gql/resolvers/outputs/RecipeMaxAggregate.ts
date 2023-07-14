import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../db";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("RecipeMaxAggregate", {})
export class RecipeMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  title!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  decription!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  creationDate!: Date | null;
}