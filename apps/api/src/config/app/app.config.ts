import { env } from "../env/env";

export const appConfig = {
  name: "Operon",

  env: env.NODE_ENV,

  port: env.PORT,

  frontendUrl:
    env.NODE_ENV === "production" ? env.FRONTEND_URL : "http://localhost:3000",

  apiPrefix: env.API_PREFIX,

  isProduction: env.NODE_ENV === "production",

  isDevelopment: env.NODE_ENV === "development",
};
