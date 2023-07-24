import Services from "@ficommerce/services";
import {PrismaClient, profiles as Profiles} from "@ficommerce/generated/db";

export interface ServerContext {
    prisma: PrismaClient;
    services: Services;
    token: string | undefined;
    user: Profiles | null
}