import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { TOKENS } from '../utils/tokens.utils';
import { IInternalAuthService } from '../interfaces/internal-auth-service.interface';

@injectable()
export class InternalAuthController {
  constructor(
    @inject(TOKENS.injections.iInternalAuthService)
    private internalAuthService: IInternalAuthService
  ) {}
  async generateTokens(req: Request, res: Response) {}
}
