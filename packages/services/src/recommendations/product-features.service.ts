import {PrismaClient, products as Products} from "@ficommerce/generated/db";
import {TransformerService} from "../transformers/transformer.service";
import squel from "squel";
import * as console from "console";

export class ProductFeaturesService {
    constructor(private prisma: PrismaClient, private transformerService: TransformerService) {
    }

    async insertProductIntoProductFeatures(product: Products) {
        const uniqueName = this.transformerService.getStringEmbeddingForProduct(product);
        const embeddings = await this.transformerService.embeddingsFromString(uniqueName);
        const script = this.createRawCommandProductFeatures(product, embeddings, uniqueName, {
            name: product.name,
            owner: product.profilesId
        });
        const result = await this.prisma.$executeRawUnsafe(script);
        return result;
    }

    createRawCommandProductFeatures(product: Products, embeddings: Array<number>, uniqueName: string, metadata: any) {
        return squel.insert()
            .into('"features"."product_features"')
            .setFieldsRows([
                {
                    '"productId"': product.id,
                    '"uniqueName"': uniqueName,
                    '"vector"': this.transformerService.createVectorString(embeddings),
                    '"metadata"': JSON.stringify(metadata)
                }
            ]).toString();
    }

    static createInstance(prisma: PrismaClient, tranformerService: TransformerService) {
        return new ProductFeaturesService(prisma, tranformerService)
    }
}
