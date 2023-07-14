import {PrismaClient} from "@ficommerce/generated/db"

export class RecipeService {
    constructor(private prisma: PrismaClient) {
    }
}

export default function createRecipeService(prisma: PrismaClient) {
    return new RecipeService(prisma);
}