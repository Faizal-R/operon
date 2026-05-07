import "dotenv/config";

import { envSchema } from "./schema";

const parsed = envSchema.safeParse(process.env);

export const env = parsed.data!;
