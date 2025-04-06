import { NextFunction, Request, Response } from 'express';
import { logger } from '../configs/logger.config';
import { hrtime } from 'node:process';
import { ApiResponseDto } from '../dtos/api-response.dto';
import { TOKENS } from '../utils/tokens.utils';

export const requestLogger = (req: Request, res: Response, next: NextFunction) => {
  const start = hrtime.bigint();
  logger.info(TOKENS.logger.requestMiddleware.logRequest(req.method, req.url));

  let responseBody: ApiResponseDto = {};

  const originalJson = res.json.bind(res);
  res.json = (body: ApiResponseDto) => {
    responseBody = body;
    return originalJson(body);
  };

  res.on('finish', () => {
    const end = hrtime.bigint();
    const durationMs = (Number(end - start) / 1000000).toFixed(2);

    const { message, error } = extractResponseInfo(responseBody);
    const statusCode = res.statusCode.toString();

    if (res.statusCode >= 400) {
      logger.error(
        TOKENS.logger.requestMiddleware.logErrorResponse(statusCode, req.url, durationMs, error)
      );
    } else {
      logger.info(
        TOKENS.logger.requestMiddleware.logMessageResponse(statusCode, req.url, durationMs, message)
      );
    }
  });

  next();
};

const extractResponseInfo = (responseBody: ApiResponseDto) => {
  const { message, error, ...additionalData } = responseBody;
  const hasAdditionalData = Object.keys(additionalData).length > 0;
  const additionalDataString = hasAdditionalData
    ? TOKENS.logger.requestMiddleware.additionalData + JSON.stringify(additionalData)
    : TOKENS.emptyString;

  return {
    message: message + additionalDataString,
    error: error + additionalDataString,
  };
};
