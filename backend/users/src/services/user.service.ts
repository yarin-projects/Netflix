import { inject, injectable } from 'inversify';
import { LoginRequestDto } from '../dtos/login-request.dto';
import { SignUpRequestDto } from '../dtos/sign-up-request.dto';
import { IUserService } from '../interfaces/user-service.interface';
import { IUser } from '../interfaces/user-interface';
import { TOKENS } from '../utils/tokens.utils';
import { IUserRepository } from '../interfaces/user-repository.interface';

@injectable()
export class UserService implements IUserService {
  constructor(@inject(TOKENS.injections.iUserRepository) private userRepository: IUserRepository) {}
  signUp(data: SignUpRequestDto): Promise<IUser | null> {
    throw new Error('Method not implemented.');
  }
  login(data: LoginRequestDto): Promise<IUser | null> {
    throw new Error('Method not implemented.');
  }
  getUserById(id: string): Promise<IUser | null> {
    throw new Error('Method not implemented.');
  }
  getUserByEmail(email: string): Promise<IUser | null> {
    throw new Error('Method not implemented.');
  }
}
