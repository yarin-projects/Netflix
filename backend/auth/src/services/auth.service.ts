import { inject, injectable } from 'inversify';
import { IAuthService } from '../interfaces/auth-service.interface';
import { JwtTokensResponse } from '../dtos/jwt-tokens-response.dto';
import { IRefreshToken } from '../interfaces/refresh-token.interface';
import { TOKENS } from '../utils/tokens.utils';
import { IAuthRepository } from '../interfaces/auth-repository.interface';

@injectable()
export class AuthService implements IAuthService {
  constructor(@inject(TOKENS.injections.iAuthRepository) private authRepository: IAuthRepository) {}
  async refreshJwtTokens(refreshToken: IRefreshToken): Promise<JwtTokensResponse> {
    throw new Error('Method not implemented.');
  }
}
