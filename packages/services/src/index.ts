import {PrismaClient} from "@ficommerce/generated/db"
import RecipeService, {createRecipeService} from "./recipe/recipe.service";
import AuthService, {createAuthService} from "./auth/auth.service";
import {createProductsService, ProductsService} from "./products";

export default interface Services {
    recipeService: RecipeService,
    authService: AuthService,
    productService: ProductsService
}

export function createServices(prisma: PrismaClient): Services {
    return {
        recipeService: createRecipeService(prisma),
        authService: createAuthService(),
        productService: createProductsService(prisma)
    }
}