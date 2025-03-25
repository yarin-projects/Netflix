import { NextFunction, Request, Response } from 'express';
import { logger } from '../configs/logger.config';
import { hrtime } from 'node:process';

export const requestLogger = (req: Request, res: Response, next: NextFunction) => {
  logger.info(`Incoming Request: [${req.method}] ${req.url}`);
  const start = hrtime.bigint();

  let responseBody: any = null;
  const originalJson = res.json.bind(res);

  res.json = (body: any) => {
    responseBody = body;
    return originalJson(body);
  };

  res.on('finish', () => {
    const end = hrtime.bigint();
    const duration = (Number(end - start) / 1000000).toFixed(2);

    let additionalProps = {};
    if (responseBody && typeof responseBody === 'object') {
      const { message: _, error: __, ...rest } = responseBody;
      additionalProps = rest;
    }

    const additionalPropsString =
      Object.keys(additionalProps).length > 0
        ? ` - Additional Data: ${JSON.stringify(additionalProps)}`
        : '';

    if (res.statusCode >= 400) {
      const { error } = responseBody;
      logger.error(
        `Outgoing Response: [${res.statusCode}] ${req.url} (${duration} ms) - Error: ${error}${additionalPropsString}`
      );
    } else {
      const { message } = responseBody;
      logger.info(
        `Outgoing Response: [${res.statusCode}] ${req.url} (${duration} ms) - Message: ${message}${additionalPropsString}`
      );
    }
  });

  next();
};
