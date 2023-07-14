import {PrismaClient} from "@ficommerce/generated/db"
import createRecipeService, {RecipeService} from "./recipe";

export interface Services {
    recipeService: RecipeService
}

export default function createServices(prisma: PrismaClient) : Services {
    return {
        recipeService: createRecipeService(prisma)
    }
}