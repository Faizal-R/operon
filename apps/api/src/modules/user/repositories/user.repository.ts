import {
  PrismaClient,
  Prisma,
  User,
} from "@/infrastructure/database/postgres/prisma/generated/client";
import { IUserRepository } from "./interfaces/user.repository.interface";
import { TYPES } from "@/infrastructure/container/inversify.types";
import { inject, injectable } from "inversify";

@injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @inject(TYPES.DATABASE.PrismaClient) private readonly _prisma: PrismaClient,
  ) {}

  async create(data: Prisma.UserCreateInput): Promise<User> {
    return await this._prisma.user.create({
      data,
    });
  }

  async findByEmail(email: string): Promise<User | null> {
    return await this._prisma.user.findUnique({
      where: { email },
    });
  }
}
