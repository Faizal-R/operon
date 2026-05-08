import "dotenv/config";

import { Env, validateEnv } from "./schema";

export const env: Env = validateEnv(process.env);
