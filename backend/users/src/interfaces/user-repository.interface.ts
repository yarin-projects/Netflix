import { AuthRequestDto } from '../dtos/auth-request.dto';
import { IRefreshToken } from './refresh-token.interface';
import { IUser } from './user.interface';

export interface IUserRepository {
  createUser(data: AuthRequestDto): Promise<IUser | null>;
  createRefreshToken(data: IRefreshToken): Promise<IRefreshToken | null>;
  findByEmail(email: string): Promise<IUser | null>;
  findRefreshToken(token: string, user_id: string): Promise<IRefreshToken | null>;
  consumeRefreshToken(token: string, user_id: string): Promise<IRefreshToken | null>;
}
