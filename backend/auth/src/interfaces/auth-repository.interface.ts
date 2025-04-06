import { IRefreshToken } from './refresh-token.interface';

export interface IAuthRepository {
  createToken(tokenData: IRefreshToken): Promise<IRefreshToken | null>;
  findToken(token: string, userId: string): Promise<IRefreshToken | null>;
  markTokenUsed(token: string, userId: string): Promise<IRefreshToken | null>;
}
