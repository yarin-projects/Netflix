import { injectable } from 'inversify';
import { SignUpRequestDto } from '../dtos/sign-up-request.dto';
import { IUserRepository } from '../interfaces/user-repository.interface';
import { IUser } from '../interfaces/user.interface';
import { User } from '../models/user.model';

@injectable()
export class UserRepository implements IUserRepository {
  async create(data: SignUpRequestDto): Promise<IUser | null> {
    const newUser = await User.create({ data });
    return newUser;
  }
  async findById(id: string): Promise<IUser | null> {
    const user = await User.findByPk(id);
    return user;
  }
  async findByEmail(email: string): Promise<IUser | null> {
    const user = await User.findOne({ where: { email } });
    return user;
  }
}
