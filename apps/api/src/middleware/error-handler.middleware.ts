import { Request, Response, NextFunction } from "express";

import { errorResponse } from "@/shared/utils/response-handler";
import { ScopedLogger } from "@/infrastructure/observability/logging";

export const errorHandlerMiddleware = (
  err: unknown,
  req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const logger = new ScopedLogger({
    requestId: req.id,
    method: req.method,
    url: req.originalUrl,
    ...(Object.keys(req.params || {}).length > 0 && { params: req.params }),
    ...(Object.keys(req.query || {}).length > 0 && { query: req.query }),
  });

  logger.error(
    err instanceof Error ? err.message : "Unhandled error",
    err instanceof Error ? { stack: err.stack } : {},
  );

  errorResponse(res, err);
};
