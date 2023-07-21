import {PrismaClient} from "@ficommerce/generated/db"

export default class RecipeService {
    constructor(private prisma: PrismaClient) {
    }

    getAllRecipe() {
        return this.prisma.recipe.findMany();
    }
}

export function createRecipeService(prisma: PrismaClient) {
    return new RecipeService(prisma);
}