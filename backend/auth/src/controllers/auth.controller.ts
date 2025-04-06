import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { TOKENS } from '../utils/tokens.utils';
import { IAuthService } from '../interfaces/auth-service.interface';

@injectable()
export class AuthController {
  constructor(@inject(TOKENS.injections.iAuthService) private authService: IAuthService) {}
  async refreshTokens(req: Request, res: Response) {}
  async me(req: Request, res: Response) {}
}
