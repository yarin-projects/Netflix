import { RefreshToken } from '../models/refresh-token.model';
import { IRefreshToken } from './refresh-token.interface';

export interface IAuthRepository {
  createToken(tokenData: IRefreshToken): Promise<IRefreshToken | null>;
  findToken(encryptedToken: string, userId: string): Promise<RefreshToken | null>;
  markTokenUsed(tokenInstance: RefreshToken): Promise<IRefreshToken | null>;
}
