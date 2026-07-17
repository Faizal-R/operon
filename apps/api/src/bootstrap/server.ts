import http from "http";

import { app } from "@/app";

import { appConfig } from "@/config/app/app.config";

import { logger } from "@/infrastructure/observability/logging";

import { bootstrapDatabase } from "./database";

import {
  bootstrapPreRoutesMiddlewares,
  bootstrapPostRoutesMiddlewares,
} from "./middlewares";

import { setupGracefulShutdown } from "./graceful-shutdown";
import { bootstrapRoutes } from "./routes";

export async function bootstrapServer() {
  try {
    // Initialize infrastructure
    await bootstrapDatabase();

    // Register pre-route middleware
    bootstrapPreRoutesMiddlewares(app);

    // Register routes
    bootstrapRoutes(app);

    // Register post-route middleware (error handler)
    bootstrapPostRoutesMiddlewares(app);

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
