import {PrismaClient} from "@ficommerce/generated/db"
import RecipeService, {createRecipeService} from "./recipe/recipe.service";
import AuthService, {createAuthService} from "./auth/auth.service";
import {createProductsService, ProductsService} from "./products";
import {createStripeService, StripeService} from "./stripe/stripe.service";
import QueueService, {createQueueService} from "./worker/queue.service";
import {STRIPE_QUEUE} from "./constants";

export default interface Services {
    recipeService: RecipeService,
    authService: AuthService,
    productService: ProductsService,
    stripeService: StripeService,
    stripeQueueService: QueueService
}

export function createServices(prisma: PrismaClient): Services {
    const stripeService = createStripeService();
    const stripeQueueService = createQueueService(STRIPE_QUEUE.NAME);
    return {
        stripeQueueService,
        recipeService: createRecipeService(prisma),
        authService: createAuthService(),
        productService: createProductsService(prisma, stripeQueueService),
        stripeService
    }
}