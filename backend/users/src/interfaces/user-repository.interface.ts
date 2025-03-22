import { SignUpRequestDto } from '../dtos/sign-up-request.dto';
import { IUser } from './user-interface';

export interface IUserRepository {
  create(data: SignUpRequestDto): Promise<IUser | null>;
  findById(id: string): Promise<IUser | null>;
  findByEmail(email: string): Promise<IUser | null>;
}
