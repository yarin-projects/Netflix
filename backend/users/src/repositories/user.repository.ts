import { injectable } from 'inversify';
import { IUserRepository } from '../interfaces/user-repository.interface';
import { IUser } from '../interfaces/user.interface';
import { User } from '../models/user.model';
import { AuthRequestDto } from '../dtos/auth-request.dto';
import { IRefreshToken } from '../interfaces/refresh-token.interface';
import { RefreshToken } from '../models/refresh-token.model';

@injectable()
export class UserRepository implements IUserRepository {
  async createUser(data: AuthRequestDto): Promise<IUser | null> {
    const newUser = await User.create({ ...data });
    return newUser;
  }
  async createRefreshToken(data: IRefreshToken): Promise<IRefreshToken | null> {
    const newRefreshToken = await RefreshToken.create({ ...data });
    return newRefreshToken;
  }
  async findByEmail(email: string): Promise<IUser | null> {
    const user = await User.findOne({ where: { email } });
    return user;
  }
  async findRefreshToken(token: string, user_id: string): Promise<IRefreshToken | null> {
    const refreshToken = await RefreshToken.findOne({ where: { token, user_id } });
    return refreshToken;
  }
  async consumeRefreshToken(token: string, user_id: string): Promise<IRefreshToken | null> {
    const refreshToken = await RefreshToken.findOne({ where: { token, user_id } });
    if (refreshToken && !refreshToken.used) {
      refreshToken.used = true;
      await refreshToken.save();
    }
    return refreshToken;
  }
}
