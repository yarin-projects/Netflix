import { Request, Response, Router } from 'express';
import { container } from '../configs/inversify.config';
import { UserController } from '../controllers/user.controller';
import { TOKENS } from '../utils/tokens.utils';
import { validate } from '../middlewares/validate.middleware';
import { authSchema } from '../schemas/auth.schema';

const userRouter: Router = Router();

const userController = container.get<UserController>(TOKENS.injections.userController);

userRouter.post(TOKENS.routes.signUp, validate(authSchema), (req: Request, res: Response) => {
  userController.singUp(req, res);
});

userRouter.post(TOKENS.routes.login, validate(authSchema), (req: Request, res: Response) => {
  userController.login(req, res);
});

userRouter.post(TOKENS.routes.logout, (req: Request, res: Response) => {
  userController.logout(req, res);
});

export { userRouter };
