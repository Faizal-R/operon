import { Request, Response } from "express";
import { IUserController } from "./interfaces/user.controller.interface";
import { IUserService } from "../services/interfaces/user.service.interface";

export class UserController implements IUserController {
  constructor(private readonly _userService: IUserService) {}
}
