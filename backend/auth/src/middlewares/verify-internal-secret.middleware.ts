import { NextFunction, Request, Response } from 'express';
import { TOKENS } from '../utils/tokens.utils';
import { handleError } from '../utils/error-handler.utils';

const internalSecret = process.env.INTERNAL_ROUTE_SECRET;

export const verifyInternalSecret = (req: Request, res: Response, next: NextFunction) => {
  if (!internalSecret) {
    const error = TOKENS.errors.internalRouteSecretMissing;
    handleError(res, error);
    return;
  }
  const providedSecret = req.body.secret as string;
  if (!providedSecret || providedSecret !== internalSecret) {
    const error = TOKENS.errors.internalRouteSecretInvalid;
    handleError(res, error);
    return;
  }

  next();
};

export const internalSecretLength = internalSecret?.length ?? 0;
