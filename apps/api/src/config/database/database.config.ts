import { postgresConfig } from "./postgres.config";
import { mongodbConfig } from "./mongodb.config";
import { redisConfig } from "./redis.config";

export const databaseConfig = {
  postgres: postgresConfig,

  mongodb: mongodbConfig,

  redis: redisConfig,
};
