import Services, {TransformerService} from "@ficommerce/services";
import {Job} from "bullmq";
import {TRANSFORMER_QUEUE} from "@ficommerce/services/constants";
import * as console from "console";

export function getWorkers(services: Services, token: string) {

    return async function (job: Job) {
        await job.log(`Start processing job: ${job.name}-${job.id}`);
        try {
            switch (job.name) {
                case TRANSFORMER_QUEUE.TRANSFORMER_CREATE_PRODUCT:
                    const insertedProductFeatures = await services.productFeatures.insertProductIntoProductFeatures(job.data);
                    await job.moveToCompleted(insertedProductFeatures, token);
                    break;
                case TRANSFORMER_QUEUE.PROFILE_CREATED_ACTION:
                    const insertedProfileFeatures = await services.profileFeatures.insertProfileIntoProfileFeatures(job.data);
                    console.log(insertedProfileFeatures);
                    await job.moveToCompleted(insertedProfileFeatures, token);
                    break;
                case TRANSFORMER_QUEUE.USER_LIKE_PRODUCT_ACTION:
                    const newLikedProduct = await services.profileFeatures.updateProfilePreference(job.data);
                    console.log(newLikedProduct);
                    await job.moveToCompleted(newLikedProduct, token);
                    break;
                default:
                    console.log(`Not found ${job.name}`, job.data);
                    break;
            }
            console.log(`Completed ${job.name}`, job.data.id);
        } catch (e) {
            console.log(e);
            await job.moveToFailed(e, job.id);
            await job.retry();
        }
    }
}