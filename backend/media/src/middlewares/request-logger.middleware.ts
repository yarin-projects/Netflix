import { NextFunction, Request, Response } from 'express';
import { logger } from '../configs/logger.config';
import { hrtime } from 'node:process';
import { ApiResponse } from '../Interfaces/api-response.interface';

export const requestLogger = (req: Request, res: Response, next: NextFunction) => {
  logger.info(`Incoming Request: [${req.method}] ${req.url}`);
  const start = hrtime.bigint();

  let responseBody: ApiResponse = {};

  const originalJson = res.json.bind(res);
  res.json = (body: ApiResponse) => {
    responseBody = body;
    return originalJson(body);
  };

  res.on('finish', () => {
    const end = hrtime.bigint();
    const durationMs = (Number(end - start) / 1000000).toFixed(2);

    const { message, error } = extractResponseInfo(responseBody);

    const logMessage = `Outgoing Response: [${res.statusCode}] ${req.url} (${durationMs} ms) -`;
    if (res.statusCode >= 400) {
      logger.error(`${logMessage} Error: ${error}`);
    } else {
      logger.info(`${logMessage} Message: ${message}`);
    }
  });

  next();
};

const extractResponseInfo = (responseBody: ApiResponse) => {
  const { message, error, ...additionalData } = responseBody;
  const hasAdditionalData = Object.keys(additionalData).length > 0;
  const additionalDataString = hasAdditionalData
    ? ` - Additional Data: ${JSON.stringify(additionalData)}`
    : '';

  return {
    message: message + additionalDataString,
    error: error + additionalDataString,
  };
};
