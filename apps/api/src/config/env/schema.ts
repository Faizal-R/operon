import { z } from "zod";

export const envSchema = z.object({
  PORT: z.coerce.number().default(7000),

  API_PREFIX: z.string().default("/api"),

  FRONTEND_URL: z.string().min(1, { message: "FRONTEND_URL is required" }),

  POSTGRES_URL: z.string().min(1, { message: "POSTGRES_URL is required" }),

  MONGODB_URI: z.string().min(1, { message: "MONGODB_URI is required" }),

  REDIS_URL: z.string().min(1, { message: "REDIS_URL is required" }),

  // KAFKA_BROKERS: z.string().min(1, { message: "KAFKA_BROKERS is required" }),

  JWT_ACCESS_SECRET: z
    .string()
    .min(1, { message: "JWT_ACCESS_SECRET is required" }),

  JWT_REFRESH_SECRET: z
    .string()
    .min(1, { message: "JWT_REFRESH_SECRET is required" }),

  JWT_ACCESS_EXPIRES_IN: z.string().default("15m"),

  JWT_REFRESH_EXPIRES_IN: z.string().default("7d"),

  NODE_ENV: z.enum(["development", "production", "test"]),

  LOG_LEVEL: z
    .enum(["fatal", "error", "warn", "info", "debug"])
    .default("info"),
});

export type Env = z.infer<typeof envSchema>;

export function validateEnv(env: Record<string, unknown>) {
  const result = envSchema.safeParse(env);

  if (!result.success) {
    result.error.issues.forEach((err) => {
      console.error(`❌ ${err.path.join(".")}: ${err.message}`);
    });
    process.exit(1);
  }

  return result.data;
}
