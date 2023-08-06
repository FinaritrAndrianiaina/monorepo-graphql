import { Prisma } from "@ficommerce/generated/db";
export declare class CreateProductInput {
    name: string;
    price: Prisma.Decimal;
    description: string;
}
