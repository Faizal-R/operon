import { Server } from "http";

// import { prisma } from "@/infrastructure/database/postgres/prisma";

// import { redis } from "@/infrastructure/redis/redis";

import { logger } from "@/infrastructure/observability/logging";

export function setupGracefulShutdown(server: Server) {
  async function shutdown(signal: string) {
    logger.warn(`Received ${signal}`);

    server.close(async () => {
      //   await prisma.$disconnect();

      //   redis.disconnect();

      logger.info("Graceful shutdown completed");

      process.exit(0);
    });
  }

  process.on("SIGINT", () => shutdown("SIGINT"));

  process.on("SIGTERM", () => shutdown("SIGTERM"));
}
