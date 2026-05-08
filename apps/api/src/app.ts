import express from "express";

import helmet from "helmet";

import cors from "cors";

import compression from "compression";

import cookieParser from "cookie-parser";

import { appConfig } from "@/config/app/app.config";

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
  res.status(200).json({
    status: "ok",
  });
});
