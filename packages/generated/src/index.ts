import "reflect-metadata";
import * as prisma from "@prisma/client";
import * as typegraphql from "./typegraphql";

export interface ServerContext {
    prisma: prisma.PrismaClient;
}

export {
    prisma,
    typegraphql
}