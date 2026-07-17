import { PrismaClient } from "./generated/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { postgresConfig } from "@/config/database/postgres.config";

import { TYPES } from "@/infrastructure/container/inversify.types";
import { container } from "@/infrastructure/container/inversify.config";

const isProduction = process.env.NODE_ENV === "production";

const adapterOptions: any = {
  connectionString: postgresConfig.url,
};

if (isProduction) {
  adapterOptions.ssl = {
    rejectUnauthorized: false,
  };
}

const adapter = new PrismaPg(adapterOptions);

export const prisma = new PrismaClient({ adapter });

container.bind(TYPES.DATABASE.PrismaClient).toConstantValue(prisma);
