import { inject, injectable } from 'inversify';
import { IInternalProfileService } from '../interfaces/internal-profile-service.interface';
import { myProfileDto } from '../dtos/my-profile.dto';
import { IProfileRepository } from '../interfaces/profile-repository.interface';
import { TOKENS } from '../utils/tokens.utils';
import { logger } from '../configs/logger.config';

@injectable()
export class InternalProfileService implements IInternalProfileService {
  constructor(
    @inject(TOKENS.injections.iProfileRepository) private profileRepository: IProfileRepository
  ) {}
  async createDefaultProfile(userId: string): Promise<myProfileDto | null> {
    const existingCount = await this.profileRepository.countProfilesByUserId(userId);
    if (existingCount > 0) {
      logger.warn(TOKENS.messages.profileExists + userId);
      const existingProfile = await this.profileRepository.findProfileByUserId(userId);
      return existingProfile ? existingProfile : null;
    }

    const defaultProfile = await this.profileRepository.createDefaultProfile(
      userId,
      TOKENS.sql.defaultProfileData
    );
    return defaultProfile;
  }
}
