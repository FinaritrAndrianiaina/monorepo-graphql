import process from "process";

export const WORKER_HOST = process.env.WORKER_HOST || 'localhost';
export const WORKER_PORT = Number(process.env.WORKER_PORT) || 6379;
export const WORKER_PASS = process.env.WORKER_PASS || 'eYVX7EwVmmxKPCDmwMtyKVge8oLd2t81';

export enum STRIPE_QUEUE {
    NAME = 'STRIPE_QUEUE',
    STRIPE_SEND = "STRIPE_SEND",
    REQUEST_PRODUCT_CREATE= "STRIPE_REQUEST_PRODUCT_CREATE",
}