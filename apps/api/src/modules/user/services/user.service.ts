import { injectable } from "inversify";
import { IUserService } from "./interfaces/user.service.interface";

@injectable()
export class UserService implements IUserService {
  constructor() {}
}
