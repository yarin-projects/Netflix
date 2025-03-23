import { AuthRequestDto } from '../dtos/auth-request.dto';
import { IUser } from './user.interface';

export interface IUserService {
  signUp(data: AuthRequestDto): Promise<IUser | null>;
  login(data: AuthRequestDto): Promise<IUser | null>;
  getUserById(id: string): Promise<IUser | null>;
  getUserByEmail(email: string): Promise<IUser | null>;
}
