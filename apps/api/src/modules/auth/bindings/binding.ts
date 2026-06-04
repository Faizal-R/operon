import { Container } from "inversify";
import { IAuthController } from "../controllers/interfaces/auth.controller.interface";
import { AuthController } from "../controllers/auth.controller";
import { TYPES } from "@/infrastructure/container/inversify.types";
import { AuthService } from "../services/auth.services";
import { IAuthService } from "../services/interfaces/auth.service.interface";

export const registerAuthModule = (container: Container) => {
  //controller bindings
  container
    .bind<IAuthController>(TYPES.CONTROLLERS.AuthController)
    .to(AuthController);

  //service bindings
  container.bind<IAuthService>(TYPES.SERVICES.AuthService).to(AuthService);
};
