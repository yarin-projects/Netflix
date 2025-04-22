import { Request, Response, NextFunction } from 'express';
import { ZodError, ZodSchema } from 'zod';
import { handleError } from '../utils/error-handler.utils';

export const validate = (schema: ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      req.body = schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        handleError(res, new Error(error.errors[0].message));
      } else {
        handleError(res, error);
      }
    }
  };
};
