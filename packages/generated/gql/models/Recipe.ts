import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../db";
import { DecimalJSScalar } from "../scalars";

@TypeGraphQL.ObjectType("Recipe", {})
export class Recipe {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  decription?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  creationDate!: Date;
}
