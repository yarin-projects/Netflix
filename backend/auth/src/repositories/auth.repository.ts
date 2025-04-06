import { injectable } from 'inversify';
import { IAuthRepository } from '../interfaces/auth-repository.interface';
import { IRefreshToken } from '../interfaces/refresh-token.interface';
import { RefreshToken } from '../models/refresh-token.model';

@injectable()
export class AuthRepository implements IAuthRepository {
  async createRefreshToken(tokenData: IRefreshToken): Promise<IRefreshToken | null> {
    const newRefreshToken = await RefreshToken.create({ ...tokenData });
    return newRefreshToken;
  }
  async consumeToken(token: string, user_id: string): Promise<IRefreshToken | null> {
    const refreshToken = await RefreshToken.findOne({ where: { token, user_id } });
    if (!refreshToken) {
      return null;
    }
    await refreshToken.update({ used: true });
    return refreshToken;
  }
}
