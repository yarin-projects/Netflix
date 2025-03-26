import { inject, injectable } from 'inversify';
import { IUserService } from '../interfaces/user-service.interface';
import { TOKENS } from '../utils/tokens.utils';
import { IUserRepository } from '../interfaces/user-repository.interface';
import { AuthRequestDto } from '../dtos/auth-request.dto';
import { comparePassword, hashPassword } from '../utils/bcrypt.utils';
import { logger } from '../configs/logger.config';
import { generateAccessToken, generateRefreshToken } from '../utils/jwt.utils';
import { IJwtTokens } from '../interfaces/jwt-tokens.interface';
import { IUser } from '../interfaces/user.interface';

@injectable()
export class UserService implements IUserService {
  constructor(@inject(TOKENS.injections.iUserRepository) private userRepository: IUserRepository) {}
  async signUp(data: AuthRequestDto): Promise<IJwtTokens> {
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

    return this.generateJwtTokens(newUser);
  }
  async login(data: AuthRequestDto): Promise<IJwtTokens> {
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

    return this.generateJwtTokens(existingUser);
  }
  generateJwtTokens = (user: IUser): IJwtTokens => {
    const accessToken = generateAccessToken({ user_id: user.user_id, email: user.email });
    const refreshToken = generateRefreshToken({ user_id: user.user_id, email: user.email });
    return { accessToken, refreshToken };
  };
}
