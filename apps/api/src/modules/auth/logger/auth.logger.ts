import { ScopedLogger } from "@/infrastructure/observability/logging";

export const authLogger = new ScopedLogger({ module: "Auth" });
