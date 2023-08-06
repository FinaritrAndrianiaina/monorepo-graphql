import Services, {TransformerService} from "@ficommerce/services";
import {Job} from "bullmq";
import {STRIPE_QUEUE} from "@ficommerce/services/constants";
import * as console from "console";

export function getWorkers(services: Services, token: string) {

    return async function (job: Job) {
        await job.log(`Start processing job: ${job.name}-${job.id}`);
        try {
            switch (job.name) {
                case STRIPE_QUEUE.REQUEST_PRODUCT_CREATE:
                    console.log('REQUESTING PRODUCT CREATION: ', job.data.id);
                    const result = await services.productFeatures.insertProductIntoProductFeatures(job.data);
                    console.log('embedding for', result);
                    await job.moveToCompleted(result, token);
                    break;
                default:
                    console.log(job.name, job.data);
                    break;
            }
        } catch (e) {
            console.log(e);
            await job.moveToFailed(e, job.id);
        }
    }
}