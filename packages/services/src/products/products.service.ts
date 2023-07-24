import {PrismaClient, profiles as Profiles} from "@ficommerce/generated/db";
import {CreateProductInput} from "@ficommerce/generated/custom";
import {prisma} from "@ficommerce/generated";

export class ProductsService {
    constructor(private prisma: PrismaClient) {
    }

    createProducts(createProductArgs: CreateProductInput, user: Profiles) {
        return  this.prisma.products.create({
            data: {
                description: createProductArgs.description,
                price: createProductArgs.price,
                name: createProductArgs.name,
                owner: {
                    connect: {
                        id: user.id
                    }
                }
            }
        })
    }
}

export function createProductsService(prisma: PrismaClient) {
    return new ProductsService(prisma);
}