import mongoose from "mongoose";

import { mongodbConfig } from "@/config/database/mongodb.config";

export async function connectMongo() {
  try {
    await mongoose.connect(mongodbConfig.uri);
  } catch (error) {
    process.exit(1);
  }
}
