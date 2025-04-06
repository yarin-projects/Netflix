import { Request, Response, Router } from 'express';
import { container } from '../configs/inversify.config';
import { InternalAuthController } from '../controllers/internal-auth.controller';
import { TOKENS } from '../utils/tokens.utils';

const internalAuthRouter: Router = Router();

const internalAuthController = container.get<InternalAuthController>(
  TOKENS.injections.internalAuthController
);

internalAuthRouter.post(TOKENS.routes.me, (req: Request, res: Response) => {
  internalAuthController.generateTokens(req, res);
});

export { internalAuthRouter };
