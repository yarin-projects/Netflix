import { JwtTokens } from '../dtos/jwt-tokens-response.dto';
import { IRefreshToken } from './refresh-token.interface';

export interface IAuthService {
  refreshJwtTokens(refreshToken: IRefreshToken): Promise<JwtTokens>;
}
