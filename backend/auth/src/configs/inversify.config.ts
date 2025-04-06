import { Container } from 'inversify';
import { TOKENS } from '../utils/tokens.utils';
import { AuthController } from '../controllers/auth.controller';
import { InternalAuthController } from '../controllers/internal-auth.controller';
import { IAuthService } from '../interfaces/auth-service.interface';
import { AuthService } from '../services/auth.service';
import { IInternalAuthService } from '../interfaces/internal-auth-service.interface';
import { InternalAuthService } from '../services/internal-auth.service';
import { IAuthRepository } from '../interfaces/auth-repository.interface';
import { AuthRepository } from '../repositories/auth.repository';

const container = new Container();

container.bind<AuthController>(TOKENS.injections.authController).to(AuthController);
container.bind<InternalAuthController>(TOKENS.injections.internalAuthController).to(InternalAuthController);

container.bind<IAuthService>(TOKENS.injections.iAuthService).to(AuthService);
container.bind<IInternalAuthService>(TOKENS.injections.iInternalAuthService).to(InternalAuthService);

container.bind<IAuthRepository>(TOKENS.injections.iAuthRepository).to(AuthRepository);

export { container };
