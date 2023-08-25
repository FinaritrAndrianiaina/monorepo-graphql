import {PrismaClient, profiles as Profiles} from "@ficommerce/generated/db";
import {TransformerService} from "../transformers/transformer.service";
import squel from "squel";
import * as console from "console";

export class ProfileFeaturesService {
    constructor(private prisma: PrismaClient, private transformerService: TransformerService) {
    }

    async insertProfileIntoProfileFeatures(profiles: Profiles) {
        const uniqueName = this.transformerService.getStringEmbeddingForProfiles(profiles);
        const embeddings = await this.transformerService.embeddingsFromString(uniqueName);
        const script = this.createRawCommandProfileFeatures(profiles, embeddings, uniqueName, profiles);
        return this.prisma.$executeRawUnsafe(script);
    }


    createRawCommandProfileFeatures(profiles: Profiles, embeddings: Array<number>, uniqueName: string, metadata: any) {
        return squel.insert()
            .into('"features"."profiles_features"')
            .setFieldsRows([
                {
                    '"profiles"': profiles.id,
                    '"uniqueName"': uniqueName,
                    '"profileEmbedding"': this.transformerService.createVectorString(embeddings),
                    '"preferenceAggregate"': this.transformerService.createVectorString(Array(384).fill(0)),
                    '"metadata"': JSON.stringify(metadata)
                }
            ]).toString();
    }

    async updateProfilePreference(data: {
        product: any,
        userId: string
    }) {
        const query  = `select features.update_preference_aggregate('${data.userId}');`;
        return this.prisma.$executeRawUnsafe(query);
    }

    static createInstance(prisma: PrismaClient, transformerService: TransformerService) {
        return new ProfileFeaturesService(prisma, transformerService)
    }
}
