import { Response } from 'express';
import { TOKENS } from './tokens.utils';

export const handleError = (res: Response, error: unknown): Response => {
  if (error instanceof Error) {
    return res.status(TOKENS.httpStatus.BAD_REQUEST).json({ error: error.message });
  }
  if (error as string) return res.status(TOKENS.httpStatus.BAD_REQUEST).json({ error });
  return res
    .status(TOKENS.httpStatus.INTERNAL_SERVER_ERROR)
    .json({ error: TOKENS.errors.internalServerError });
};
