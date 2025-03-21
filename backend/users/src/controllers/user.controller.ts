import { inject, injectable } from 'inversify';
import { TOKENS } from '../utils/tokens.utils';
import { IUserService } from '../interfaces/user-service.interface';

@injectable()
export class UserController {
  constructor(@inject(TOKENS.injections.iUserService) private userService: IUserService) {}
  async singUp() {
    throw new Error('Method not implemented.');
  }
  async login() {
    throw new Error('Method not implemented.');
  }
  async logout() {
    throw new Error('Method not implemented.');
  }
}
