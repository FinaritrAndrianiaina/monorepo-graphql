import Services from "@ficommerce/services";
import {PrismaClient} from "@ficommerce/generated/db";

export interface ServerContext {
    prisma: PrismaClient;
    services: Services
}