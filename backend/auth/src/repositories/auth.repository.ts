import { injectable } from 'inversify';
import { IAuthRepository } from '../interfaces/auth-repository.interface';
import { IRefreshToken } from '../interfaces/refresh-token.interface';
import { RefreshToken } from '../models/refresh-token.model';

@injectable()
export class AuthRepository implements IAuthRepository {
  async createToken(tokenData: IRefreshToken): Promise<IRefreshToken | null> {
    const newRefreshToken = await RefreshToken.create({ ...tokenData });
    return newRefreshToken;
  }
  async findToken(token: string, userId: string): Promise<IRefreshToken | null> {
    const refreshToken = await RefreshToken.findOne({ where: { token, user_id: userId } });
    return refreshToken;
  }
  async markTokenUsed(token: string, userId: string): Promise<IRefreshToken | null> {
    const refreshToken = await RefreshToken.findOne({ where: { token, user_id: userId } });
    if (!refreshToken) {
      return null;
    }
    await refreshToken.update({ used: true });
    return refreshToken;
  }
}
