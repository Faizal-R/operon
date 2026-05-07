import { env } from "../env/env";

export const appConfig = {
  name: "Operon",

  env: env?.NODE_ENV,

  port: env?.PORT,

  apiPrefix: env?.API_PREFIX || "/api",

  isProduction: env?.NODE_ENV === "production",

  isDevelopment: env?.NODE_ENV === "development",
};
