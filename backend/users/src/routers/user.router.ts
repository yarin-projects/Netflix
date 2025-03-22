import { Request, Response, Router } from 'express';
import { container } from '../config/inversify.config';
import { UserController } from '../controllers/user-controller';
import { TOKENS } from '../utils/tokens.utils';
import { validate } from '../middlewares/validate.middleware';
import { signUpSchema } from '../schemas/auth.schema';

const userRouter: Router = Router();

const userController = container.get<UserController>(TOKENS.injections.userController);

userRouter.post(TOKENS.routes.signUp, validate(signUpSchema), (req: Request, res: Response) => {
  userController.singUp(req, res);
});

userRouter.post(TOKENS.routes.login, (req: Request, res: Response) => {
  userController.login(req, res);
});

userRouter.post(TOKENS.routes.logout, (req: Request, res: Response) => {
  userController.logout(req, res);
});

export { userRouter };
