import { AuthRequestDto } from '../dtos/auth-request.dto';
import { IUser } from './user.interface';

export interface IUserService {
  signUp(data: AuthRequestDto): Promise<IUser>;
  login(data: AuthRequestDto): Promise<IUser>;
}
