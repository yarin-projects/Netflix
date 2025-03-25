import winston from 'winston';
import path from 'path';

const { combine, timestamp, printf, colorize } = winston.format;

const logMessageFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});
const timestampFormat = timestamp({ format: 'YYYY-MM-DD HH:mm:ss.SSS' });

const consoleLogFormatter = combine(colorize(), timestampFormat, logMessageFormat);
const logFormatter = combine(timestampFormat, logMessageFormat);

const relativeLogsPath = path.join(__dirname, '../../logs');

export const logger = winston.createLogger({
  level: 'info',
  format: logFormatter,
  transports: [
    new winston.transports.Console({ format: consoleLogFormatter }),
    new winston.transports.File({
      filename: relativeLogsPath + '/users-combined-logs.log',
    }),
    new winston.transports.File({
      filename: relativeLogsPath + '/users-error-logs.log',
      level: 'error',
    }),
  ],
});
