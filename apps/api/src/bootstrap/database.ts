import { connectMongo } from "../infrastructure/database/mongodb/mongoose";
import { prisma } from "@/infrastructure/database/postgres/prisma/prisma";
export async function bootstrapDatabase() {
  // await connectMongo();
  await prisma.$connect();
  console.log("✅ Postgres connected");
  await prisma.$queryRaw`SELECT 1`;
  console.log("✅ DB QUERY OK");
}
