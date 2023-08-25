import {PrismaClient, profiles as Profiles} from "@ficommerce/generated/db";
import axios from "axios";
import QueueService from "../worker/queue.service";
import {TRANSFORMER_QUEUE} from "../constants";

export class ProfileService {

    constructor(private prisma: PrismaClient, private transformerQueueService: QueueService) {
    }

    likedProduct(profile: Profiles) {
        return this.prisma.products.findMany({
            where: {id: profile.id}
        });
    }

    async createProfile(profile: Profiles) {
        const createdProfile = await this.prisma.profiles.create({data: profile});
        this.transformerQueueService.add(TRANSFORMER_QUEUE.PROFILE_CREATED_ACTION, profile).catch(console.error);
        return createdProfile;
    }


}

export function createProfileService(prisma: PrismaClient, transformerQueueService: QueueService) {
    return new ProfileService(prisma, transformerQueueService);
}