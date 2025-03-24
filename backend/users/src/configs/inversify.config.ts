import { Container } from 'inversify';
import { UserController } from '../controllers/user.controller';
import { TOKENS } from '../utils/tokens.utils';
import { IUserService } from '../interfaces/user-service.interface';
import { UserService } from '../services/user.service';
import { IUserRepository } from '../interfaces/user-repository.interface';
import { UserRepository } from '../repositories/user.repository';

const container = new Container();

container.bind<UserController>(TOKENS.injections.userController).to(UserController);

container.bind<IUserService>(TOKENS.injections.iUserService).to(UserService);

container.bind<IUserRepository>(TOKENS.injections.iUserRepository).to(UserRepository);

export { container };
