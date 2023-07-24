import {PrismaClient} from "@ficommerce/generated/db"
import RecipeService, {createRecipeService} from "./recipe/recipe.service";
import AuthService, {createAuthService} from "./auth/auth.service";

export default interface Services {
    recipeService: RecipeService,
    authService: AuthService
}

export function createServices(prisma: PrismaClient): Services {
    return {
        recipeService: createRecipeService(prisma),
        authService: createAuthService()
    }
}