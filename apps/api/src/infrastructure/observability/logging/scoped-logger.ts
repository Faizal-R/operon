import { Logger } from "pino";
import rootLogger from "./logger";

export class ScopedLogger {
  private logger: Logger;

  constructor(context: Record<string, unknown>) {
    this.logger = rootLogger.child(context);
  }

  info(message: string, meta: object = {}) {
    this.logger.info(meta, message);
  }

  error(message: string, meta: object = {}) {
    this.logger.error(meta, message);
  }

  warn(message: string, meta: object = {}) {
    this.logger.warn(meta, message);
  }

  debug(message: string, meta: object = {}) {
    this.logger.debug(meta, message);
  }

  trace(message: string, meta: object = {}) {
    this.logger.trace(meta, message);
  }

  fatal(message: string, meta: object = {}) {
    this.logger.fatal(meta, message);
  }

  child(context: object) {
    return this.logger.child(context);
  }
}
