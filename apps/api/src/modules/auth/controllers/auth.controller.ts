import { Request, Response } from "express";
import { IAuthController } from "./interfaces/auth.controller.interface";
import { IAuthService } from "../services/interfaces/auth.service.interface";
import { createResponse } from "../../../shared/utils/response-handler";
import { statusCodes } from "../../../shared/constants/status-codes";
import { authLogger } from "../logger/auth.logger";

export class AuthController implements IAuthController {
  constructor(private readonly _authService: IAuthService) {}

  signGithub = async (req: Request, res: Response): Promise<void> => {
    authLogger.info("Handling signGithub request");

    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      authLogger.warn(
        "SignGithub failed - no token provided in authorization header",
      );
      return createResponse(
        res,
        statusCodes.UNAUTHORIZED,
        false,
        "No token",
        null,
      );
    }

    const user = await this._authService.signGithub(token);

    authLogger.info("SignGithub request processed successfully", {
      userId: user.id,
    });

    return createResponse(res, statusCodes.OK, true, "User signed in", user);
  };
}
