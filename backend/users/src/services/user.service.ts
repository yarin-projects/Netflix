import { inject, injectable } from 'inversify';
import { IUserService } from '../interfaces/user-service.interface';
import { IUser } from '../interfaces/user.interface';
import { TOKENS } from '../utils/tokens.utils';
import { IUserRepository } from '../interfaces/user-repository.interface';
import { AuthRequestDto } from '../dtos/auth-request.dto';

@injectable()
export class UserService implements IUserService {
  constructor(@inject(TOKENS.injections.iUserRepository) private userRepository: IUserRepository) {}
  signUp(data: AuthRequestDto): Promise<IUser | null> {
    throw new Error('Method not implemented.');
  }
  login(data: AuthRequestDto): Promise<IUser | null> {
    throw new Error('Method not implemented.');
  }
  getUserById(id: string): Promise<IUser | null> {
    throw new Error('Method not implemented.');
  }
  getUserByEmail(email: string): Promise<IUser | null> {
    throw new Error('Method not implemented.');
  }
}
