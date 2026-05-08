import { Express } from "express";

import { requestIdMiddleware } from "@/middleware/requestId.middleware";

import { requestLoggerMiddleware } from "@/middleware/request-logger.middleware";

import { errorHandlerMiddleware } from "@/middleware/error-handler.middleware";

export function bootstrapMiddlewares(app: Express) {
  app.use(requestIdMiddleware);

  app.use(requestLoggerMiddleware);

  app.use(errorHandlerMiddleware);
}
