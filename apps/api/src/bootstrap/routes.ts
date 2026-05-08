import { Application } from "express";

import { modules } from "@/modules";
import { appConfig } from "@/config/app/app.config";

export function bootstrapRoutes(app: Application) {
  for (const module of modules) {
    app.use(
      `${appConfig.apiPrefix}/${module.version}${module.path}`,
      module.router,
    );
  }
}
