import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";
import { AuthService } from "../services/auth.services";
import { UserRepository } from "../../user/repositories/user.repository";
import { asyncHandler } from "../../../shared/utils/async-handler";
import { prisma } from "@/infrastructure/database/postgres/prisma/prisma";

const router: Router = Router();

const userRepository = new UserRepository(prisma);
const authService = new AuthService(userRepository);
const authController = new AuthController(authService);

router.post("/github", asyncHandler(authController.signGithub));

export default router;
