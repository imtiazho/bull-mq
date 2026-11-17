import "dotenv/config";
import IORedis from "ioredis";

export const createRedisConnection = () => {
  return new IORedis(process.env.REDIS_URL, {
    maxRetriesPerRequest: null,
  });
};