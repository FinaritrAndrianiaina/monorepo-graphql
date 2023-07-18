import {Args, Ctx, Query, Resolver} from "type-graphql";
import {FindManyRecipeArgs, FindUniqueRecipeArgs, Recipe} from "@ficommerce/generated/gql";
import {ServerContext} from "../context";

@Resolver(Recipe)
export class RecipeResolver {

    @Query(returns => Recipe)
    async recipe(@Args() findUniqueArgs: FindUniqueRecipeArgs, @Ctx() ctx: ServerContext): Promise<Recipe | null> {
        return ctx.prisma.recipe.findUnique(findUniqueArgs);
    }

    @Query(returns => [Recipe])
    async findAll(@Ctx() ctx: ServerContext): Promise<Recipe[]> {
        return ctx.services.recipeService.getAllRecipe();
    }
}