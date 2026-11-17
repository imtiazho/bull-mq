import { Worker } from "bullmq";
import "dotenv/config";
import sendEmail from "../mainSendEmail.js";
import { createRedisConnection } from "../redis.js";

export const worker = new Worker(
  "emailSendingQueue",
  async (job) => {
    const { email } = job.data;
    await sendEmail({ email });
  },
  { 
    connection: createRedisConnection()
  },
);

worker.on("completed", (job) => console.log(`Job ${job.id} completed`));
worker.on("failed", (job, err) =>
  console.error(`Job ${job?.id} failed:`, err.message),
);
