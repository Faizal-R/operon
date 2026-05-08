import { env } from "../env/env";

export const postgresConfig = {
  url: env.POSTGRES_URL,

  pool: {
    min: 2,
    max: 10,
  },

  logging: !["production"].includes(env.NODE_ENV),
};
