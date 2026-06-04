import { registerAuthModule } from "./bindings/binding";
import authRoutes from "./routes/auth.routes";

export const authModule = {
  name: "auth",

  version: "v1",

  path: "/auth",

  router: authRoutes,

  register: registerAuthModule,
};
