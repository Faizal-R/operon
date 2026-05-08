import { env } from "../env/env";

export const redisConfig = {
  url: env.REDIS_URL,

  retryStrategy(times: number) {
    return Math.min(times * 50, 2000);
  },

  defaultTTL: 60,
};
