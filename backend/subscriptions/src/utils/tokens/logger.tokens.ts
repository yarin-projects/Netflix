const usersService = '[Subscriptions Service]';
const outgoingResponse = `${usersService} Outgoing Response:`;
const logFormat = (level: string, message: string, timestamp: string) =>
  `${timestamp} ${level}: ${message}`;
const logRequest = (method: string, url: string) =>
  `${usersService} Incoming Request: [${method}] ${url}`;
const logMessageResponse = (statusCode: string, url: string, durationMs: string, message: string) =>
  `${outgoingResponse} [${statusCode}] ${url} (${durationMs} ms) - Message: ${message}`;
const logErrorResponse = (statusCode: string, url: string, durationMs: string, error: string) =>
  `${outgoingResponse} [${statusCode}] ${url} (${durationMs} ms) - Error: ${error}`;

export const logger = {
  config: {
    logFormat,
    relativePath: '../../logs',
    timestampFormat: 'YYYY-MM-DD HH:mm:ss.SSS',
    combinedLogName: '/subscriptions-combined-logs.log',
    errorLogName: '/subscriptions-error-logs.log',
    levels: {
      info: 'info',
      error: 'error',
    },
  },
  requestMiddleware: {
    logRequest,
    logMessageResponse,
    logErrorResponse,
    additionalData: ' - Additional Data: ',
  },
};
