import { IAuthService } from "./interfaces/auth.service.interface";
import { IUserRepository } from "@/modules/user/repositories/interfaces/user.repository.interface";
import { supabase } from "../config/supabase";
import { ApiError } from "@/shared/utils/custom-error";
import { statusCodes } from "@/shared/constants/status-codes";
import { authLogger } from "../logger/auth.logger";

export class AuthService implements IAuthService {
  constructor(private readonly _userRepository: IUserRepository) {}

  async signGithub(token: string) {
    authLogger.info("Authenticating Github session token via Supabase");

    const {
      data: { user },
      error,
    } = await supabase.auth.getUser(token);

    if (error || !user) {
      authLogger.error("Supabase authentication failed", {
        error: error?.message,
      });
      throw new ApiError("Invalid token", statusCodes.UNAUTHORIZED);
    }

    const githubId =
      user.identities?.find((i) => i.provider === "github")?.id || user.id;

    authLogger.info("Creating local user representation", { githubId });

    const newUser = await this._userRepository.create({
      email: user.email!,
      githubId: githubId,
      githubLogin: user.user_metadata?.user_name || "",
      name: user.user_metadata?.full_name || "",
      avatarUrl: user.user_metadata?.avatar_url || "",
      githubAccessToken: token,
    });

    authLogger.info("Local user initialized successfully");
    return newUser;
  }
}
