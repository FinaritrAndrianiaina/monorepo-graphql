import {PrismaClient} from "@ficommerce/generated/db"
import RecipeService, {createRecipeService} from "./recipe/recipe.service";
import AuthService, {createAuthService} from "./auth/auth.service";
import {createProductsService, ProductsService} from "./products";
import {createStripeService, StripeService} from "./stripe/stripe.service";
import QueueService, {createQueueService} from "./worker/queue.service";
import {TRANSFORMER_QUEUE} from "./constants";
import {createTransformerService, TransformerService} from "./transformers/transformer.service";
import {ProductFeaturesService, ProfileFeaturesService} from "./recommendations";
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
    profileServices: ProfileService,
    profileFeatures: ProfileFeaturesService
}

export function createServices(prisma: PrismaClient): Services {
    const stripeService = createStripeService();
    const transformerQueueService = createQueueService(TRANSFORMER_QUEUE.NAME);
    const transformerService = createTransformerService();
    let profileServices = createProfileService(prisma,transformerQueueService);
    return {
        transformerService,
        stripeQueueService: transformerQueueService,
        recipeService: createRecipeService(prisma),
        profileServices,
        authService: createAuthService(prisma, profileServices),
        productFeatures: ProductFeaturesService.createInstance(prisma, transformerService),
        profileFeatures: ProfileFeaturesService.createInstance(prisma, transformerService),
        productService: createProductsService(prisma, transformerQueueService),
        stripeService
    }
}