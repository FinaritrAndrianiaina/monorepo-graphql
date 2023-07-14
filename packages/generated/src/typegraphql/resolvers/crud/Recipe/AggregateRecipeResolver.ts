import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateRecipeArgs } from "./args/AggregateRecipeArgs";
import { Recipe } from "../../../models/Recipe";
import { AggregateRecipe } from "../../outputs/AggregateRecipe";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Recipe)
export class AggregateRecipeResolver {
  @TypeGraphQL.Query(_returns => AggregateRecipe, {
    nullable: false
  })
  async aggregateRecipe(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateRecipeArgs): Promise<AggregateRecipe> {
    return getPrismaFromContext(ctx).recipe.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
