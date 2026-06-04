import { Router } from "express";
import { asyncHandler } from "../../../shared/utils/async-handler";
import { TYPES } from "@/infrastructure/container/inversify.types";
import { IAuthController } from "../controllers/interfaces/auth.controller.interface";
import { resolveContainer } from "@/infrastructure/container/inversify.config";

const router: Router = Router();

const authController = resolveContainer<IAuthController>(
  TYPES.CONTROLLERS.AuthController,
);

router.post("/github", asyncHandler(authController.signGithub));

export default router;
