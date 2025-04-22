import { inject, injectable } from 'inversify';
import { ITokenHelperService } from '../interfaces/token-helper-service.interface';
import { JwtTokens } from '../dtos/jwt-tokens.dto';
import { ITokenMetaData } from '../interfaces/token-meta-data.interface';
import { IUserPayload } from '../interfaces/user-payload.interface';
import { TOKENS } from '../utils/tokens.utils';
import { IAuthRepository } from '../interfaces/auth-repository.interface';
import { generateJwtTokens } from '../utils/jwt.utils';
import { encrypt } from '../utils/aes.utils';
import { IRefreshToken } from '../interfaces/refresh-token.interface';

@injectable()
export class TokenHelperService implements ITokenHelperService {
  constructor(@inject(TOKENS.injections.iAuthRepository) private authRepository: IAuthRepository) {}
  async generateNewTokensAndSaveToDB(
    payload: IUserPayload,
    metaData: ITokenMetaData
  ): Promise<JwtTokens> {
    const { ipAddress, userAgent } = metaData;
    const { userId } = payload;
    const { accessToken, refreshToken } = generateJwtTokens(payload);
    const encryptedRefreshToken = encrypt(refreshToken);

    const refreshTokenModel: IRefreshToken = {
      token: encryptedRefreshToken,
      userId,
      ipAddress,
      userAgent,
      used: false,
    };
    await this.authRepository.createToken(refreshTokenModel);

    return { accessToken, refreshToken };
  }
}
