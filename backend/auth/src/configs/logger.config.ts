import winston from 'winston';
import path from 'path';
import { TOKENS } from '../utils/tokens.utils';

const { combine, timestamp, printf, colorize } = winston.format;

const logMessageFormat = printf(({ level, message, timestamp }) => {
  return TOKENS.logger.config.logFormat(level, message as string, timestamp as string);
});
const timestampFormat = timestamp({ format: TOKENS.logger.config.timestampFormat });

const consoleLogFormatter = combine(colorize(), timestampFormat, logMessageFormat);
const logFormatter = combine(timestampFormat, logMessageFormat);

const relativeLogsPath = path.join(__dirname, TOKENS.logger.config.relativePath);

export const logger = winston.createLogger({
  level: TOKENS.logger.config.levels.info,
  format: logFormatter,
  transports: [
    // new winston.transports.Console({ format: consoleLogFormatter }),
    new winston.transports.File({
      filename: relativeLogsPath + TOKENS.logger.config.combinedLogName,
    }),
    new winston.transports.File({
      filename: relativeLogsPath + TOKENS.logger.config.errorLogName,
      level: TOKENS.logger.config.levels.error,
    }),
  ],
});
