import {Worker} from "bullmq";
import {WORKER_HOST, WORKER_PORT, WORKER_PASS, STRIPE_QUEUE} from "@ficommerce/services/constants";
import {getWorkers} from "./workers";
import {createServices, createTransformerService} from "@ficommerce/services";
import {PrismaClient} from "@ficommerce/generated/db";
import {randomUUID} from "crypto";

async function main() {

    const connection = {
        host: WORKER_HOST,
        port: WORKER_PORT,
        password: WORKER_PASS
    };
    const prisma = new PrismaClient();
    const services = createServices(prisma);
    const token = randomUUID()
    const tService = await createTransformerService();
    const myQueue = new Worker(STRIPE_QUEUE.NAME, getWorkers(services, token), {
        connection,
    });


    process.on("SIGTERM", async () => {
        console.info("SIGTERM signal received: closing queues");

        await myQueue.close();

        console.info("All closed");
    });
}

main().then();
