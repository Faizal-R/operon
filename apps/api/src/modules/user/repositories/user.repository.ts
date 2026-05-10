import {
  PrismaClient,
  Prisma,
  User,
} from "@/infrastructure/database/postgres/prisma/generated/client";
import { IUserRepository } from "./interfaces/user.repository.interface";

export class UserRepository implements IUserRepository {
  constructor(private readonly _prisma: PrismaClient) {}

  async create(data: Prisma.UserCreateInput): Promise<User> {
    return await this._prisma.user.create({
      data,
    });
  }
}
