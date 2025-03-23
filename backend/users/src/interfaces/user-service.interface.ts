import { AuthRequestDto } from '../dtos/auth-request.dto';

export interface IUserService {
  signUp(data: AuthRequestDto): Promise<string>;
  login(data: AuthRequestDto): Promise<string>;
}
