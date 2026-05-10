import "dotenv/config";
import { defineConfig } from "prisma/config";

import { postgresConfig } from "./src/config/database/postgres.config";

export default defineConfig({
  schema: "src/infrastructure/database/postgres/prisma/schema.prisma",

  migrations: {
    path: "src/infrastructure/database/postgres/prisma/migrations",
  },

  datasource: {
    url: postgresConfig.url,
  },
});
