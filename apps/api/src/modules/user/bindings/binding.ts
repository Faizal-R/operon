import { Container } from "inversify";
import { TYPES } from "@/infrastructure/container/inversify.types";

import { IUserController } from "../controllers/interfaces/user.controller.interface";
import { UserController } from "../controllers/user.controller";

import { UserService } from "../services/user.service";
import { IUserService } from "../services/interfaces/user.service.interface";

import { UserRepository } from "../repositories/user.repository";
import { IUserRepository } from "../repositories/interfaces/user.repository.interface";

export function registerUserBindings(container: Container) {
  container
    .bind<IUserController>(TYPES.CONTROLLERS.UserController)
    .to(UserController);

  container.bind<IUserService>(TYPES.SERVICES.UserService).to(UserService);

  container
    .bind<IUserRepository>(TYPES.REPOSITORIES.UserRepository)
    .to(UserRepository);
}
