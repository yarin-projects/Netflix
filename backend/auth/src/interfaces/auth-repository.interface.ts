import { IRefreshToken } from './refresh-token.interface';

export interface IAuthRepository {
  createRefreshToken(tokenData: IRefreshToken): Promise<IRefreshToken | null>;
  consumeToken(token: string, user_id: string): Promise<IRefreshToken | null>;
}
