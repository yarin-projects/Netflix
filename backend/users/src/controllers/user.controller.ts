import { inject, injectable } from 'inversify';
import { TOKENS } from '../utils/tokens.utils';
import { IUserService } from '../interfaces/user-service.interface';
import { Request, Response } from 'express';
import { handleError } from '../utils/error-handler.utils';
import { AuthRequestDto } from '../dtos/auth-request.dto';
import { setCookie } from '../utils/cookies.utils';

@injectable()
export class UserController {
  constructor(@inject(TOKENS.injections.iUserService) private userService: IUserService) {}
  async singUp(req: Request, res: Response) {
    try {
      const data: AuthRequestDto = req.body;

      const token = await this.userService.signUp(data);

      setCookie(res, token);

      res
        .status(TOKENS.httpStatus.CREATED)
        .json({ message: TOKENS.messages.userCreated, email: data.email });
    } catch (error) {
      handleError(res, error);
    }
  }
  async login(req: Request, res: Response) {
    try {
      const data: AuthRequestDto = req.body;

      const token = await this.userService.login(data);

      setCookie(res, token);

      res
        .status(TOKENS.httpStatus.OK)
        .json({ message: TOKENS.messages.loginSuccess, email: data.email });
    } catch (error) {
      handleError(res, error);
    }
  }
  async logout(req: Request, res: Response) {
    res.clearCookie(TOKENS.token);
    res.status(TOKENS.httpStatus.OK).json({ message: TOKENS.messages.logoutSuccess });
  }
}
