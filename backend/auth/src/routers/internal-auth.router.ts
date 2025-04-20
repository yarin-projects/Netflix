import { Request, Response, Router } from 'express';
import { container } from '../configs/inversify.config';
import { InternalAuthController } from '../controllers/internal-auth.controller';
import { TOKENS } from '../utils/tokens.utils';
import { validate } from '../middlewares/validate.middleware';
import { generateTokenSchema } from '../schemas/generate-token.schema';
import { verifyInternalSecret } from '../middlewares/verify-internal-secret.middleware';

const internalAuthRouter: Router = Router();

const internalAuthController = container.get<InternalAuthController>(
  TOKENS.injections.internalAuthController
);

internalAuthRouter.post(
  TOKENS.routes.generateTokens,
  validate(generateTokenSchema),
  verifyInternalSecret,
  (req: Request, res: Response) => {
    internalAuthController.generateTokens(req, res);
  }
);

export { internalAuthRouter };
