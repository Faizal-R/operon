import http from "http";

import { app } from "@/app";

import { appConfig } from "@/config/app/app.config";

import { logger } from "@/infrastructure/observability/logging";

import { bootstrapDatabase } from "./database";

import { bootstrapMiddlewares } from "./middlewares";

import { bootstrapRoutes } from "./routes";

import { setupGracefulShutdown } from "./graceful-shutdown";

export async function bootstrapServer() {
  try {
    // Initialize infrastructure
    await bootstrapDatabase();

    // Register middleware
    bootstrapMiddlewares(app);

    // Register routes
    bootstrapRoutes(app);

    const server = http.createServer(app);

    // Setup graceful shutdown
    setupGracefulShutdown(server);

    // Start server
    server.listen(appConfig.port, () => {
      logger.info(
        {
          port: appConfig.port,
        },
        `${appConfig.name} server started`,
      );
    });
  } catch (error) {
    logger.fatal(
      {
        error,
      },
      "Server bootstrap failed",
    );

    process.exit(1);
  }
}
