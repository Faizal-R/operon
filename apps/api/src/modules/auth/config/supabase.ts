import { env } from "@/config/env/env";
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  env.SUPABASE_URL,
  env.SUPABASE_SERVICE_ROLE_KEY,
);
