import { Response } from "express";
import { statusCodes } from "../constants/status-codes.js";
import { ApiError } from "./custom-error.js";
import { env } from "@/config/env/env.js";

export function createResponse<T>(
  response: Response,
  statusCode: number,
  success: boolean,
  message: string,
  data: T | null = null,
): void {
  response.status(statusCode).json({
    success,
    message,
    data,
  });
}

export const errorResponse = (response: Response, error: unknown): void => {
  let statusCode = statusCodes.INTERNAL_SERVER_ERROR;

  let message = "Something went wrong. Please try again later.";

  if (error instanceof ApiError) {
    statusCode = error.statusCode;

    message = error.message;
  } else if (error instanceof Error) {
    message =
      env.NODE_ENV === "development"
        ? error.message
        : "Internal server error,Please try again later.";
  }

  createResponse(response, statusCode, false, message);
};
