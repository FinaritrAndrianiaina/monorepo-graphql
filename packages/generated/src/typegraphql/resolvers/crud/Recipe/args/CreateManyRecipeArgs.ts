import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RecipeCreateManyInput } from "../../../inputs/RecipeCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyRecipeArgs {
  @TypeGraphQL.Field(_type => [RecipeCreateManyInput], {
    nullable: false
  })
  data!: RecipeCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
