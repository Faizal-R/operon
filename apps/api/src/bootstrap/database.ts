import { connectMongo } from "../infrastructure/database/mongodb/mongoose";

export async function bootstrapDatabase() {
  await connectMongo();

  console.log("✅ MongoDB connected");
}
