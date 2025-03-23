import { inject, injectable } from 'inversify';
import { IUserService } from '../interfaces/user-service.interface';
import { TOKENS } from '../utils/tokens.utils';
import { IUserRepository } from '../interfaces/user-repository.interface';
import { AuthRequestDto } from '../dtos/auth-request.dto';
import { comparePassword, hashPassword } from '../utils/bcrypt.utils';
import { generateToken } from '../utils/jwt.utils';

@injectable()
export class UserService implements IUserService {
  constructor(@inject(TOKENS.injections.iUserRepository) private userRepository: IUserRepository) {}
  async signUp(data: AuthRequestDto): Promise<string> {
    const { email, password } = data;

    const existingUser = await this.userRepository.findByEmail(email);
    if (existingUser) {
      throw new Error(TOKENS.errors.userAlreadyExists);
    }

    const hashedPassword = await hashPassword(password);

    const newUser = await this.userRepository.create({ email, password: hashedPassword });
    if (!newUser) {
      throw new Error(TOKENS.errors.userCouldNotBeCreated);
    }

    return generateToken({ email });
  }
  async login(data: AuthRequestDto): Promise<string> {
    const { email, password } = data;

    const existingUser = await this.userRepository.findByEmail(email);
    if (!existingUser) {
      throw new Error(TOKENS.errors.userNotFound);
    }

    const isPasswordValid = await comparePassword(password, existingUser.password);
    if (!isPasswordValid) {
      throw new Error(TOKENS.errors.invalidPassword);
    }

    return generateToken({ email });
  }
}
