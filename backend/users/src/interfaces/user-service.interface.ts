import { AuthRequestDto } from '../dtos/auth-request.dto';
import { IJwtTokens } from './jwt-tokens.interface';

export interface IUserService {
  signUp(data: AuthRequestDto): Promise<IJwtTokens>;
  login(data: AuthRequestDto): Promise<IJwtTokens>;
}
