import { inject, injectable } from 'inversify';
import { IAuthService } from '../interfaces/auth-service.interface';
import { JwtTokens } from '../dtos/jwt-tokens.dto';
import { TOKENS } from '../utils/tokens.utils';
import { IAuthRepository } from '../interfaces/auth-repository.interface';
import { encrypt } from '../utils/aes.utils';
import { logger } from '../configs/logger.config';
import { IUserPayload } from '../interfaces/user-payload.interface';
import { ITokenHelperService } from '../interfaces/token-helper-service.interface';
import { refreshTokenDto } from '../dtos/refresh-token.dto';

@injectable()
export class AuthService implements IAuthService {
  constructor(
    @inject(TOKENS.injections.iAuthRepository) private authRepository: IAuthRepository,
    @inject(TOKENS.injections.iTokenHelperService) private tokenHelperService: ITokenHelperService
  ) {}
  async refreshJwtTokens(
    incomingTokenData: refreshTokenDto,
    payload: IUserPayload
  ): Promise<JwtTokens> {
    const { refreshToken: rawIncomingToken, userAgent } = incomingTokenData;
    const { userId } = payload;

    const encryptedTokenToFind = encrypt(rawIncomingToken);
    const refreshTokenRecord = await this.authRepository.findToken(encryptedTokenToFind, userId);
    if (!refreshTokenRecord) {
      throw new Error(TOKENS.errors.invalidRefreshToken);
    }

    const { ipAddress: storedIpAddress, userAgent: storedUserAgent, used } = refreshTokenRecord;
    if (used) {
      logger.error(TOKENS.errors.refreshTokenUsed + userId);
      throw new Error(TOKENS.errors.refreshTokenUsed);
    }
    if (userAgent !== storedUserAgent) {
      logger.error(TOKENS.errors.invalidTokenMetaData + userId);
      await this.authRepository.markTokenUsed(refreshTokenRecord);
      throw new Error(TOKENS.errors.invalidRefreshToken);
    }
    await this.authRepository.markTokenUsed(refreshTokenRecord);

    const jwtTokens = await this.tokenHelperService.generateNewTokensAndSaveToDB(payload, {
      ipAddress: storedIpAddress!,
      userAgent: storedUserAgent!,
    });
    return jwtTokens;
  }
}
