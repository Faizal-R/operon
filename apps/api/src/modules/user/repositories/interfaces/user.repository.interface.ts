import {
  Prisma,
  User,
} from "@/infrastructure/database/postgres/prisma/generated/client";

export interface IUserRepository {
  create(data: Prisma.UserCreateInput): Promise<User>;
  findByEmail(email: string): Promise<User | null>;
}
