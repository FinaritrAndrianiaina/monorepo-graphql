import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstRecipeOrThrowArgs } from "./args/FindFirstRecipeOrThrowArgs";
import { Recipe } from "../../../models/Recipe";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Recipe)
export class FindFirstRecipeOrThrowResolver {
  @TypeGraphQL.Query(_returns => Recipe, {
    nullable: true
  })
  async findFirstRecipeOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstRecipeOrThrowArgs): Promise<Recipe | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).recipe.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
