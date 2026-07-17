import "dotenv/config";

import "reflect-metadata";

import "./infrastructure/container/inversify.config";

import { bootstrapServer } from "@/bootstrap/server";

const startServer = async () => {
  await bootstrapServer();
};

startServer();
