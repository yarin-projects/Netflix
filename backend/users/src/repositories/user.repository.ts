import { injectable } from 'inversify';
import { SignUpRequestDto } from '../dtos/sign-up-request.dto';
import { IUserRepository } from '../interfaces/user-repository.interface';
import { IUser } from '../interfaces/user.interface';

@injectable()
export class UserRepository implements IUserRepository {
  create(data: SignUpRequestDto): Promise<IUser | null> {
    throw new Error('Method not implemented.');
  }
  findById(id: string): Promise<IUser | null> {
    throw new Error('Method not implemented.');
  }
  findByEmail(email: string): Promise<IUser | null> {
    throw new Error('Method not implemented.');
  }
}
