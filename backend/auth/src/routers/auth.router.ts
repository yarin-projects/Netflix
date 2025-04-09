import { Request, Response, Router } from 'express';
import { container } from '../configs/inversify.config';
import { AuthController } from '../controllers/auth.controller';
import { TOKENS } from '../utils/tokens.utils';
import { validate } from '../middlewares/validate.middleware';
import { refreshTokenSchema } from '../schemas/refresh-token.schema';

const authRouter: Router = Router();

const authController = container.get<AuthController>(TOKENS.injections.authController);

authRouter.get(TOKENS.routes.me, (req: Request, res: Response) => {
  authController.me(req, res);
});
authRouter.post(
  TOKENS.routes.refreshTokens,
  validate(refreshTokenSchema),
  (req: Request, res: Response) => {
    authController.refreshTokens(req, res);
  }
);

export { authRouter };
