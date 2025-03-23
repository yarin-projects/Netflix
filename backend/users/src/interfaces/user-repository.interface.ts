import { AuthRequestDto } from '../dtos/auth-request.dto';
import { IUser } from './user.interface';

export interface IUserRepository {
  create(data: AuthRequestDto): Promise<IUser | null>;
  findByEmail(email: string): Promise<IUser | null>;
}
