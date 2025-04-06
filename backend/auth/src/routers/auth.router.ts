import { Request, Response, Router } from 'express';
import { container } from '../configs/inversify.config';
import { AuthController } from '../controllers/auth.controller';
import { TOKENS } from '../utils/tokens.utils';

const authRouter: Router = Router();

const authController = container.get<AuthController>(TOKENS.injections.authController);

authRouter.get(TOKENS.routes.me, (req: Request, res: Response) => {
  authController.me(req, res);
});
authRouter.post(TOKENS.routes.refreshTokens, (req: Request, res: Response) => {
  authController.refreshTokens(req, res);
});

export { authRouter };
