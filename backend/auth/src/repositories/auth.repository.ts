import { injectable } from 'inversify';
import { IAuthRepository } from '../interfaces/auth-repository.interface';
import { IRefreshToken } from '../interfaces/refresh-token.interface';
import { RefreshToken } from '../models/refresh-token.model';
import { logger } from '../configs/logger.config';
import { TOKENS } from '../utils/tokens.utils';

@injectable()
export class AuthRepository implements IAuthRepository {
  async createToken(tokenData: IRefreshToken): Promise<IRefreshToken | null> {
    const newRefreshToken = await RefreshToken.create({ ...tokenData });
    logger.info(TOKENS.messages.tokenSaved + tokenData.userId);
    return newRefreshToken;
  }
  async findToken(encryptedToken: string, userId: string): Promise<RefreshToken | null> {
    const refreshToken = await RefreshToken.findOne({ where: { token: encryptedToken, userId } });
    return refreshToken;
  }
  async markTokenUsed(tokenInstance: RefreshToken): Promise<IRefreshToken | null> {
    if (!tokenInstance) {
      return null;
    }
    await tokenInstance.update({ used: true });
    logger.info(TOKENS.messages.markTokenUsed + tokenInstance.userId);
    return tokenInstance;
  }
}
