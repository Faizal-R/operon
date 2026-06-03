import { connectMongo } from "../infrastructure/database/mongodb/mongoose";
import { prisma } from "@/infrastructure/database/postgres/prisma/prisma";
export async function bootstrapDatabase() {
  // await connectMongo();
  await prisma.$connect();
  await prisma.$queryRaw`SELECT 1`;
  console.log("✅ Postgres connected");

  console.log("✅ DB QUERY OK");
}
