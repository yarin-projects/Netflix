import { JwtTokens } from '../dtos/jwt-tokens.dto';
import { IRefreshToken } from './refresh-token.interface';

export interface IAuthService {
  refreshJwtTokens(refreshToken: IRefreshToken): Promise<JwtTokens>;
}
