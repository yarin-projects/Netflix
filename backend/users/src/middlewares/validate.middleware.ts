import { Request, Response, NextFunction } from 'express';
import { ZodSchema } from 'zod';
import { handleError } from '../utils/error-handler.utils';

export const validate =
  (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
    try {
      req.body = schema.parse(req.body);
      next();
    } catch (error) {
      handleError(res, error);
    }
  };
