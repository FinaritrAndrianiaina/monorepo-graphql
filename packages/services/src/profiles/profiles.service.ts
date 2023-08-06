import {PrismaClient, profiles as Profiles} from "@ficommerce/generated/db";

export class ProfileService {
    constructor(private prisma: PrismaClient) {
    }

    likedProduct(profile: Profiles) {
        return this.prisma.products.findMany({
            where: {id: profile.id}
        });
    }
}

export function createProfileService(prisma: PrismaClient) {
    return new ProfileService(prisma);
}