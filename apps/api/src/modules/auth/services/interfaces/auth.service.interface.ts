export interface IAuthService {
  signGithub(token: string): Promise<any>;
}
