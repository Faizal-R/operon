import { Request, Response } from "express";

export interface IAuthController {
  signGithub(req: Request, res: Response): Promise<void>;
}
