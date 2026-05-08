import mongoose from "mongoose";

import { mongodbConfig } from "@/config/database/mongodb.config";

export async function connectMongo() {
  try {
    await mongoose.connect(mongodbConfig.uri);
  } catch (error) {
    process.exit(1);
  }
}

export async function disconnectMongo() {
  try {
    await mongoose.disconnect();
  } catch (error) {
    process.exit(1);
  }
}
