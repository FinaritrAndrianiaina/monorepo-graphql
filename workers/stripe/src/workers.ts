import Services from "@ficommerce/services";
import {Job} from "bullmq";
import {STRIPE_QUEUE} from "@ficommerce/services/constants";
import {randomUUID} from "crypto";

export function getWorkers(services: Services) {
    return async function (job: Job) {
        await job.log(`Start processing job: ${job.name}-${job.id}`);
        try {
            switch (job.name) {
                case STRIPE_QUEUE.REQUEST_PRODUCT_CREATE:
                    console.log('REQUESTING PRODUCT CREATION', job.data);
                    const returnValue = await services.stripeService.createStripeProductAndPrice(job.data);
                    await job.moveToCompleted(returnValue, randomUUID())
                    break;
                default:
                    console.log(job.name, job.data);
                    break;
            }
        } catch (e) {
            await job.moveToFailed(e, job.id);
        }
    }
}