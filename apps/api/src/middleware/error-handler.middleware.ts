import { Request, Response, NextFunction } from "express";

import { errorResponse } from "@/shared/utils/response-handler";

export const errorHandlerMiddleware = (
  err: unknown,
  req: Request,
  res: Response,
  _next: NextFunction,
) => {
  req.log.error(
    {
      err,
      requestId: req.id,
      method: req.method,
      url: req.originalUrl,
      params: req.params,
      query: req.query,
    },
    err instanceof Error ? err.message : "Unhandled error",
  );

  errorResponse(res, err);
};
