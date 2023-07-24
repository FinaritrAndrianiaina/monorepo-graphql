import {Args, Authorized, Ctx, Query, Resolver} from "type-graphql";
import {FindUniqueRecipeArgs, Recipe} from "@ficommerce/generated/gql";
import {ServerContext} from "../context";
import * as console from "console";

@Resolver(Recipe)
export class RecipeResolver {

    @Query(returns => Recipe)
    async recipe(@Args() findUniqueArgs: FindUniqueRecipeArgs, @Ctx() ctx: ServerContext): Promise<Recipe | null> {
        return ctx.prisma.recipe.findUnique(findUniqueArgs);
    }

    @Authorized()
    @Query(returns => [Recipe])
    async findAll(@Ctx() ctx: ServerContext): Promise<Recipe[]> {
        console.log(ctx.user);
        return ctx.services.recipeService.getAllRecipe();
    }
}