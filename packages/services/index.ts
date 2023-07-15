import {PrismaClient} from "@ficommerce/generated/db"
import RecipeService, {createRecipeService} from "./recipe";

export default interface Services {
    recipeService: RecipeService
}

export function createServices(prisma: PrismaClient): Services {
    return {
        recipeService: createRecipeService(prisma)
    }
}