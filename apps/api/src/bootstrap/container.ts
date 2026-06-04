import { Container } from "inversify";
import { modules } from "@/modules";
import { registerPrismaClient } from "@/infrastructure/database/postgres/prisma/prisma";

export const initializeContainers = (container: Container) => {
  //register all module bindings
  modules.forEach((module) => {
    module.register(container);
  });

  //register prisma client
  registerPrismaClient(container);
};
