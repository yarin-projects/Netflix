import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { TOKENS } from '../utils/tokens.utils';
import { IAuthService } from '../interfaces/auth-service.interface';
import { RefreshTokensRequest } from '../dtos/refresh-tokens-request.dto';
import { IUserPayload } from '../interfaces/user-payload.interface';
import { refreshTokenDto } from '../dtos/refresh-token.dto';
import { handleError } from '../utils/error-handler.utils';

@injectable()
export class AuthController {
  constructor(@inject(TOKENS.injections.iAuthService) private authService: IAuthService) {}
  async refreshTokens(req: Request, res: Response) {
    try {
      const requestData: RefreshTokensRequest = req.body;
      const tokenData: refreshTokenDto = requestData;
      const payload: IUserPayload = requestData;

      const { refreshToken, accessToken } = await this.authService.refreshJwtTokens(
        tokenData,
        payload
      );

      res
        .status(TOKENS.httpStatus.OK)
        .json({ message: TOKENS.messages.tokenRefreshed, refreshToken, accessToken });
    } catch (error) {
      handleError(res, error);
    }
  }
  async me(req: Request, res: Response) {
    res.status(TOKENS.httpStatus.OK).json({ message: TOKENS.messages.userAutheticated });
  }
}
