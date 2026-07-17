import userRoutes from "./routes/user.routes";

export const userModule = {
  name: "user",

  version: "v1",
  path: "/users",

  router: userRoutes,
};
