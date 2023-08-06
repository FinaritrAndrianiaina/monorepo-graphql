import {PrismaClient} from "@ficommerce/generated/db"
import RecipeService, {createRecipeService} from "./recipe/recipe.service";
import AuthService, {createAuthService} from "./auth/auth.service";
import {createProductsService, ProductsService} from "./products";
import {createStripeService, StripeService} from "./stripe/stripe.service";
import QueueService, {createQueueService} from "./worker/queue.service";
import {STRIPE_QUEUE} from "./constants";
import {createTransformerService, TransformerService} from "./transformers/transformer.service";
import {ProductFeaturesService} from "./recommendations";
import {createProfileService, ProfileService} from "./profiles";

export * from "./stripe/stripe.service";
export * from "./products/index";
export * from "./transformers/transformer.service";
export * from "./recipe/index";
export * from "./profiles/index";

export default interface Services {
    recipeService: RecipeService,
    authService: AuthService,
    productService: ProductsService,
    stripeService: StripeService,
    stripeQueueService: QueueService,
    transformerService: TransformerService,
    productFeatures: ProductFeaturesService,
    profileServices: ProfileService
}

export function createServices(prisma: PrismaClient): Services {
    const stripeService = createStripeService();
    const stripeQueueService = createQueueService(STRIPE_QUEUE.NAME);
    const transformerService = createTransformerService();
    return {
        transformerService,
        stripeQueueService,
        recipeService: createRecipeService(prisma),
        profileServices: createProfileService(prisma),
        authService: createAuthService(),
        productFeatures: ProductFeaturesService.createInstance(prisma, transformerService),
        productService: createProductsService(prisma, stripeQueueService),
        stripeService
    }
}