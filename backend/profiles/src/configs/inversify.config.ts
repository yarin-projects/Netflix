import { Container } from 'inversify';
import { ProfileController } from '../controllers/profile.controller';
import { InternalProfileController } from '../controllers/internal-profile.controller';
import { TOKENS } from '../utils/tokens.utils';
import { IProfileService } from '../interfaces/profile-service.interface';
import { ProfileService } from '../services/profile.service';
import { IInternalProfileService } from '../interfaces/internal-profile-service.interface';
import { InternalProfileService } from '../services/internal-profile.service';
import { IProfileRepository } from '../interfaces/profile-repository.interface';
import { ProfileRepository } from '../repositories/profile.repository';

const container = new Container();

container.bind<ProfileController>(TOKENS.injections.profileController).to(ProfileController);
container
  .bind<InternalProfileController>(TOKENS.injections.internalProfileController)
  .to(InternalProfileController);

container.bind<IProfileService>(TOKENS.injections.iProfileService).to(ProfileService);
container
  .bind<IInternalProfileService>(TOKENS.injections.iInternalProfileService)
  .to(InternalProfileService);

container.bind<IProfileRepository>(TOKENS.injections.iProfileRepository).to(ProfileRepository);

export { container };
