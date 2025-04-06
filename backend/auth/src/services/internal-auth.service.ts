import { inject, injectable } from 'inversify';
import { IInternalAuthService } from '../interfaces/internal-auth-service.interface';
import { JwtTokensResponse } from '../dtos/jwt-tokens-response.dto';
import { TOKENS } from '../utils/tokens.utils';
import { IAuthRepository } from '../interfaces/auth-repository.interface';

@injectable()
export class InternalAuthService implements IInternalAuthService {
  constructor(@inject(TOKENS.injections.iAuthRepository) private authRepository: IAuthRepository) {}
  async generateTokens(userId: string): Promise<JwtTokensResponse> {
    throw new Error('Method not implemented.');
  }
}
