import express from "express";

import helmet from "helmet";

import cors from "cors";

import compression from "compression";

import cookieParser from "cookie-parser";

import { appConfig } from "@/config/app/app.config";
import { createResponse } from "./shared/utils/response-handler";
import { statusCodes } from "./shared/constants/status-codes";

export const app: express.Application = express();

app.disable("x-powered-by");

app.set("trust proxy", 1);

app.use(
  cors({
    origin: appConfig.frontendUrl,

    credentials: true,
  }),
);

app.use(helmet());

app.use(compression());

app.use(cookieParser());

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.get("/health", (_, res) => {
  createResponse(res, statusCodes.OK, true, "API is healthy", {
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});
