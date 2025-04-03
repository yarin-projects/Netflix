import { inject, injectable } from 'inversify';
import { IUserService } from '../interfaces/user-service.interface';
import { TOKENS } from '../utils/tokens.utils';
import { IUserRepository } from '../interfaces/user-repository.interface';
import { AuthRequestDto } from '../dtos/auth-request.dto';
import { comparePassword, hashPassword } from '../utils/bcrypt.utils';
import { logger } from '../configs/logger.config';
import { IUser } from '../interfaces/user.interface';

@injectable()
export class UserService implements IUserService {
  constructor(@inject(TOKENS.injections.iUserRepository) private userRepository: IUserRepository) {}
  async signUp(data: AuthRequestDto): Promise<IUser> {
    const { email, password } = data;

    const existingUser = await this.userRepository.findByEmail(email);
    if (existingUser) {
      throw new Error(TOKENS.errors.userAlreadyExists);
    }

    const hashedPassword = await hashPassword(password);

    const newUser = await this.userRepository.createUser({ email, password: hashedPassword });
    if (!newUser) {
      throw new Error(TOKENS.errors.userCouldNotBeCreated);
    }

    return newUser;
  }
  async login(data: AuthRequestDto): Promise<IUser> {
    const { email, password } = data;

    const existingUser = await this.userRepository.findByEmail(email);
    if (!existingUser) {
      logger.error(TOKENS.errors.userNotFound + email);
      throw new Error(TOKENS.errors.invalidCredentials);
    }

    const isPasswordValid = await comparePassword(password, existingUser.password);
    if (!isPasswordValid) {
      logger.error(TOKENS.errors.invalidPassword + email);
      throw new Error(TOKENS.errors.invalidCredentials);
    }

    return existingUser;
  }
}
