import { JwtTokens } from '../dtos/jwt-tokens.dto';
import { refreshTokenDto } from '../dtos/refresh-token.dto';
import { IUserPayload } from './user-payload.interface';

export interface IAuthService {
  refreshJwtTokens(incomingTokenData: refreshTokenDto, payload: IUserPayload): Promise<JwtTokens>;
}
