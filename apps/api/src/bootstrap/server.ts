import { app } from "@/app";

import { appConfig } from "@/config/app/app.config";

export async function bootstrapServer() {
  try {
    app.listen(appConfig.port, () => {
      console.log(`🚀 ${appConfig.name} running on port ${appConfig.port}`);
    });
  } catch (error) {}
}
