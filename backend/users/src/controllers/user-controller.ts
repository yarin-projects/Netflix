import { inject, injectable } from 'inversify';
import { TOKENS } from '../utils/tokens.utils';
import { IUserService } from '../interfaces/user-service.interface';
import { Request, Response } from 'express';

@injectable()
export class UserController {
  constructor(@inject(TOKENS.injections.iUserService) private userService: IUserService) {}
  async singUp(req: Request, res: Response) {
    throw new Error('Method not implemented.');
  }
  async login(req: Request, res: Response) {
    throw new Error('Method not implemented.');
  }
  async logout(req: Request, res: Response) {
    throw new Error('Method not implemented.');
  }
}
