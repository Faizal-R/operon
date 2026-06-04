export const TYPES = {
  SERVICES: {
    AuthService: Symbol.for("AuthService"),
    UserService: Symbol.for("UserService"),
  },

  REPOSITORIES: {
    AuthRepository: Symbol.for("AuthRepository"),
    UserRepository: Symbol.for("UserRepository"),
  },

  CONTROLLERS: {
    AuthController: Symbol.for("AuthController"),
    UserController: Symbol.for("UserController"),
  },

  PROVIDERS: {
    JwtProvider: Symbol.for("JwtProvider"),
    RedisProvider: Symbol.for("RedisProvider"),
  },

  DATABASE: {
    PrismaClient: Symbol.for("PrismaClient"),
  },
};
