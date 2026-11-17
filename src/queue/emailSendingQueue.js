import { Queue } from "bullmq";
import { createRedisConnection } from "../redis.js";

export const emailSendingQueue = new Queue("emailSendingQueue", {
    connection: createRedisConnection()
})