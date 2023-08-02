import {Worker} from "bullmq";
import myWorker from "./workers/my-worker";

const connection = {
    host: "localhost",
    port: 6379,
};

const myQueue = new Worker("queueName", myWorker, {
    connection,
});

process.on("SIGTERM", async () => {
    console.info("SIGTERM signal received: closing queues");

    await myQueue.close();

    console.info("All closed");
});
