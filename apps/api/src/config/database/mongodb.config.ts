import { env } from "../env/env";

export const mongodbConfig = {
  uri: env.MONGODB_URI,

  options: {
    autoIndex: env.NODE_ENV !== "production",

    serverSelectionTimeoutMS: 5000,
  },
};
