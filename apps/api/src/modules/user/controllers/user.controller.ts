import { Request, Response } from "express";
import { IUserController } from "./interfaces/user.controller.interface";
import { IUserService } from "../services/interfaces/user.service.interface";
import { inject, injectable } from "inversify";
import { TYPES } from "@/infrastructure/container/inversify.types";

@injectable()
export class UserController implements IUserController {
  constructor(
    @inject(TYPES.SERVICES.UserService)
    private readonly _userService: IUserService,
  ) {}
}
