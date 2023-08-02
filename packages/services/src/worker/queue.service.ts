import {Queue} from "bullmq";

import {WORKER_HOST, WORKER_PASS, WORKER_PORT} from "../constants";

export default class QueueService extends Queue {

    constructor(name: string) {
        super(name, {
            connection: {
                host: WORKER_HOST,
                port: WORKER_PORT,
                password: WORKER_PASS
            }
        });
    }

}

export function createQueueService(name: string) {
    return new QueueService(name);
}