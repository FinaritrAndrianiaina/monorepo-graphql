import {PrismaClient} from "@ficommerce/generated/db"

export default class RecipeService {
    constructor(private prisma: PrismaClient) {
    }
}

export function createRecipeService(prisma: PrismaClient) {
    return new RecipeService(prisma);
}