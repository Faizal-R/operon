import pino from "pino";
import { env } from "@/config/env/env";

const rootLogger = pino({
  level: env.LOG_LEVEL || "info",

  transport:
    env.NODE_ENV !== "production"
      ? {
          target: "pino-pretty",

          options: {
            colorize: true,
            translateTime: "SYS:standard",
          },
        }
      : undefined,

  timestamp: pino.stdTimeFunctions.isoTime,

  redact: [
    "password",
    "token",
    "accessToken",
    "refreshToken",
    "req.headers.authorization",
  ],

  base: {
    app: "Operon API",
    environment: env.NODE_ENV,
  },
});

export default rootLogger;
