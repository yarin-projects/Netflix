import { LoginRequestDto } from '../dtos/login-request.dto';
import { SignUpRequestDto } from '../dtos/sign-up-request.dto';
import { IUser } from './user.interface';

export interface IUserService {
  signUp(data: SignUpRequestDto): Promise<IUser | null>;
  login(data: LoginRequestDto): Promise<IUser | null>;
  getUserById(id: string): Promise<IUser | null>;
  getUserByEmail(email: string): Promise<IUser | null>;
}
