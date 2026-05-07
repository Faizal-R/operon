import { z } from "zod";

export const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]),

  PORT: z.coerce.number().default(7000),

  API_PREFIX: z.string().default("/api"),

  FRONTEND_URL: z.string(),

  PRISMA_URI: z.string(),

  MONGODB_URI: z.string(),

  REDIS_URL: z.string(),

//   KAFKA_BROKERS: z.string(),

  JWT_ACCESS_SECRET: z.string(),

  JWT_REFRESH_SECRET: z.string(),

  JWT_ACCESS_EXPIRES_IN: z.string().default("15m"),

  JWT_REFRESH_EXPIRES_IN: z.string().default("7d"),

  LOG_LEVEL: z.enum(["fatal", "error", "warn", "info", "debug"]).default("info"),
});
// export const envSchema = z.object({
//   NODE_ENV: z.enum(["development", "production", "test"]),

//   PORT: z.coerce.number().default(7000),

//   API_PREFIX: z.string().default("/api"),

//   FRONTEND_URL: z.string(),

//   PRISMA_URI: z.string(),

//   MONGODB_URI: z.string(),

//   REDIS_URL: z.string(),

//   KAFKA_BROKERS: z.string(),

//   JWT_ACCESS_SECRET: z.string(),

//   JWT_REFRESH_SECRET: z.string(),

//   JWT_ACCESS_EXPIRES_IN: z.string().default("15m"),

//   JWT_REFRESH_EXPIRES_IN: z.string().default("7d"),

//   LOG_LEVEL: z.enum(["fatal", "error", "warn", "info", "debug"]).default("info"),
// });