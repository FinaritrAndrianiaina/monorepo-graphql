import {Args, Ctx, Query, Resolver} from "type-graphql";
import {FindManyRecipeArgs, FindUniqueRecipeArgs, Recipe} from "@ficommerce/generated/gql";
import {ServerContext} from "../src/server";

@Resolver(Recipe)
export class RecipeResolver {

    @Query(returns => Recipe)
    async recipe(@Args() findUniqueArgs: FindUniqueRecipeArgs, @Ctx() ctx: ServerContext): Promise<Recipe> {
        return ctx.prisma.recipe.findUnique(findUniqueArgs);
    }

    @Query(returns => [Recipe])
    async findAll(@Args() findManyArgs: FindManyRecipeArgs, @Ctx() ctx: ServerContext): Promise<Recipe[]> {
        return ctx.prisma.recipe.findMany({
            where: findManyArgs.where,
            cursor: findManyArgs.cursor,
            distinct: findManyArgs.distinct,
            orderBy: findManyArgs.orderBy as any,
            skip: findManyArgs.skip,
            take: findManyArgs.take
        });
    }
}