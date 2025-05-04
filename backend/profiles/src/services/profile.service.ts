import { inject, injectable } from 'inversify';
import { IProfileService } from '../interfaces/profile-service.interface';
import { MediaCardDto } from '../dtos/media-card.dto';
import { myProfileDto } from '../dtos/my-profile.dto';
import { TOKENS } from '../utils/tokens.utils';
import { IProfileRepository } from '../interfaces/profile-repository.interface';
import { logger } from '../configs/logger.config';
import { IMedia } from '../interfaces/media.interface';

@injectable()
export class ProfileService implements IProfileService {
  constructor(
    @inject(TOKENS.injections.iProfileRepository) private profileRepository: IProfileRepository
  ) {}
  async getProfileForUser(userId: string): Promise<myProfileDto | null> {
    const profile = await this.profileRepository.findProfileByUserId(userId);
    if (!profile) {
      logger.error(TOKENS.errors.profileNotFound + userId);
      throw new Error(TOKENS.errors.profileNotFound + userId);
    }
    return profile;
  }
  private async checkProfileOwnership(profileId: string, expectedUserId: string): Promise<void> {
    const profile = await this.profileRepository.findProfileByUserId(expectedUserId);
    if (!profile || profile.profileId !== profileId) {
      logger.error(TOKENS.errors.invalidProfile);
      throw new Error(TOKENS.errors.invalidProfile);
    }
  }
  async addFavorite(profileId: string, userId: string, favoriteData: IMedia): Promise<boolean> {
    await this.checkProfileOwnership(profileId, userId);

    const { mediaId, mediaType } = favoriteData;

    const [mediaRecord, wasMediaCreated] = await this.profileRepository.findOrCreateMedia(
      favoriteData
    );

    if (wasMediaCreated) {
      logger.info(TOKENS.messages.mediaCreated + JSON.stringify(favoriteData));
    }

    const [favoriteRecord, wasFavoriteCreated] = await this.profileRepository.addFavorite(
      profileId,
      mediaId,
      mediaType
    );
    return wasFavoriteCreated;
  }
  async removeFavorite(
    profileId: string,
    userId: string,
    favoriteData: MediaCardDto
  ): Promise<boolean> {
    await this.checkProfileOwnership(profileId, userId);

    const { mediaId, mediaType } = favoriteData;
    const deletedCount = await this.profileRepository.removeFavorite(profileId, mediaId, mediaType);

    return deletedCount > 0;
  }
  async getFavorites(profileId: string, userId: string): Promise<MediaCardDto[]> {
    await this.checkProfileOwnership(profileId, userId); // Authorization check
    const profileWithFavorites = await this.profileRepository.getProfileWithFavorites(profileId);

    if (!profileWithFavorites || !profileWithFavorites.favoriteMedia) {
      return [];
    }

    return profileWithFavorites.favoriteMedia.map(media => ({
      mediaId: media.mediaId,
      mediaType: media.mediaType,
      title: media.title,
      posterPath: media.posterPath,
      releaseYear: media.releaseYear,
      voteAverage: media.voteAverage,
      favoritedAt: (media as any).ProfileFavorite?.createdAt,
    }));
  }
}
