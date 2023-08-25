import {PrismaClient, profiles as Profiles} from "@ficommerce/generated/db";
import {CreateProductInput} from "@ficommerce/shared";
import QueueService from "../worker/queue.service";
import {TRANSFORMER_QUEUE} from "../constants";
import * as console from "console";

export class ProductsService {
    constructor(private prisma: PrismaClient, private transformerQueueService: QueueService) {
    }

    async createProducts(createProductArgs: CreateProductInput, user: Profiles) {
        const savedProducts = await this.prisma.products.create({
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
        this.transformerQueueService.add(TRANSFORMER_QUEUE.TRANSFORMER_CREATE_PRODUCT, savedProducts)
            .then(console.log)
            .catch(console.error)
        return savedProducts;
    }

    async likeProduct(productId: string, user: Profiles) {
        const result = await this.prisma.products.update({
            where: {id: productId},
            data: {
                profilesLiked: {
                    connect: {
                        id: user.id
                    }
                }
            }
        })
        this.transformerQueueService.add(TRANSFORMER_QUEUE.USER_LIKE_PRODUCT_ACTION, {
            product: result,
            userId: user.id
        }).then().catch(console.error);
        return result;
    }
}

export function createProductsService(prisma: PrismaClient, transformerQueueService: QueueService) {
    return new ProductsService(prisma, transformerQueueService);
}