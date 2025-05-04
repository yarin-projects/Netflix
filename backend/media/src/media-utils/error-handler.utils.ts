import { Response } from 'express';
import { TOKENS } from './tokens.utils';

export const handleError = (res: Response, error: unknown): Response => {
  if (error instanceof Error) {
    if (error.message === TOKENS.errors.movieNotFound || 
        error.message === TOKENS.errors.seriesNotFound || 
        error.message === TOKENS.errors.mediaNotFound) {
      return res.status(TOKENS.httpStatus.BAD_REQUEST).json({ error: error.message });
    }
    return res.status(TOKENS.httpStatus.INTERNAL_SERVER_ERROR).json({ error: error.message });
  }
  return res
    .status(TOKENS.httpStatus.INTERNAL_SERVER_ERROR)
    .json({ error: TOKENS.errors.internalServerError });
};
