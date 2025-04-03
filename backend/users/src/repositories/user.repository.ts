import { injectable } from 'inversify';
import { IUserRepository } from '../interfaces/user-repository.interface';
import { IUser } from '../interfaces/user.interface';
import { User } from '../models/user.model';
import { AuthRequestDto } from '../dtos/auth-request.dto';

@injectable()
export class UserRepository implements IUserRepository {
  async createUser(data: AuthRequestDto): Promise<IUser | null> {
    const newUser = await User.create({ ...data });
    return newUser;
  }
  async findByEmail(email: string): Promise<IUser | null> {
    const user = await User.findOne({ where: { email } });
    return user;
  }
}
