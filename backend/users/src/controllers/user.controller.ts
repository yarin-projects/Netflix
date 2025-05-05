import { inject, injectable } from 'inversify';
import { TOKENS } from '../utils/tokens.utils';
import { IUserService } from '../interfaces/user-service.interface';
import { Request, Response } from 'express';
import { handleError } from '../utils/error-handler.utils';
import { AuthRequestDto } from '../dtos/auth-request.dto';
import axios from 'axios';

const { INTERNAL_ROUTE_SECRET, AUTH_SERVICE_URL } = process.env;

axios.defaults.baseURL = AUTH_SERVICE_URL;
const internalSecret = INTERNAL_ROUTE_SECRET!;

@injectable()
export class UserController {
  constructor(@inject(TOKENS.injections.iUserService) private userService: IUserService) {}
  async singUp(req: Request, res: Response) {
    try {
      const data: AuthRequestDto = req.body;

      const user = await this.userService.signUp(data);

      const { userId, email } = user;
      const ipAddress = req.ip;
      const userAgent = req.headers['user-agent'] || 'unknown';

      const payload = { userId, email, ipAddress, userAgent, secret: internalSecret };

      const { accessToken, refreshToken }: any = await axios.post(
        '/internal/auth/generate-tokens',
        payload
      );

      res
        .status(TOKENS.httpStatus.CREATED)
        .json({ message: TOKENS.messages.userCreated, accessToken, refreshToken });
    } catch (error) {
      handleError(res, error);
    }
  }

  async login(req: Request, res: Response) {
    try {
      const data: AuthRequestDto = req.body;

      const user = await this.userService.login(data);

      const { userId, email } = user;
      const ipAddress = req.ip;
      const userAgent = req.headers['user-agent'] || 'unknown';

      const payload = { userId, email, ipAddress, userAgent, secret: internalSecret };

      const { accessToken, refreshToken }: any = await axios.post(
        '/internal/auth/generate-tokens',
        payload
      );

      res
        .status(TOKENS.httpStatus.OK)
        .json({ message: TOKENS.messages.loginSuccess, accessToken, refreshToken });
    } catch (error) {
      handleError(res, error);
    }
  }

  async logout(req: Request, res: Response) {
    res.status(TOKENS.httpStatus.OK).json({ message: TOKENS.messages.logoutSuccess });
  }
}
