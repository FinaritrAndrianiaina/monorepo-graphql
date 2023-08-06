import {PrismaClient, profiles as Profiles} from "@ficommerce/generated/db";
import {CreateProductInput} from "@ficommerce/shared";
import QueueService from "../worker/queue.service";
import {STRIPE_QUEUE} from "../constants";
import * as console from "console";

export class ProductsService {
    constructor(private prisma: PrismaClient, private stripeQueueService: QueueService) {
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
        this.stripeQueueService.add(STRIPE_QUEUE.REQUEST_PRODUCT_CREATE, savedProducts)
            .then(console.log)
            .catch(console.error)
        return savedProducts;
    }

    likeProduct(productId: string, user: Profiles) {
        return this.prisma.products.update({
            where: {id: productId},
            data: {
                profilesLiked: {
                    connect: {
                        id: user.id
                    }
                }
            }
        })
    }
}

export function createProductsService(prisma: PrismaClient, stripeQueueService: QueueService) {
    return new ProductsService(prisma, stripeQueueService);
}