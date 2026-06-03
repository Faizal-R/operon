import pinoHttp from "pino-http";
import rootLogger from "@/infrastructure/observability/logging/logger";

export const requestLoggerMiddleware = pinoHttp({
  logger: rootLogger,

  customProps(req) {
    return {
      requestId: req.id,
    };
  },

  serializers: {
    req(req) {
      return {
        method: req.method,
        url: req.url,
      };
    },
    res(res) {
      const body = (res as any).responseBody;
      return {
        statusCode: res.statusCode,
        ...(body ? { body } : {}),
      };
    },
    err: () => undefined,
  },
});
