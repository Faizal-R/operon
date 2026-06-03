import { Application } from "express";

import { requestIdMiddleware } from "@/middleware/requestId.middleware";

import { requestLoggerMiddleware } from "@/middleware/request-logger.middleware";

import { errorHandlerMiddleware } from "@/middleware/error-handler.middleware";

export function bootstrapPreRoutesMiddlewares(app: Application) {
  app.use(requestIdMiddleware);

  app.use(requestLoggerMiddleware);
}

export function bootstrapPostRoutesMiddlewares(app: Application) {
  app.use(errorHandlerMiddleware);
}
