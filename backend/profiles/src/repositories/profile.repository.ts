import { injectable } from 'inversify';
import { IProfileRepository } from '../interfaces/profile-repository.interface';
import { MediaType } from '../enums/media-type.enum';
import { IMedia } from '../interfaces/media.interface';
import { IProfile } from '../interfaces/profile.interface';
import { ProfileFavorite } from '../models/profile-favorite.model';
import { ProfileDefaults } from '../interfaces/profile-defaults.interface';
import { Profile } from '../models/profile.model';
import { Media } from '../models/media.model';
import { TOKENS } from '../utils/tokens.utils';

@injectable()
export class ProfileRepository implements IProfileRepository {
  async createDefaultProfile(userId: string, defaults: ProfileDefaults): Promise<IProfile> {
    const { name, avatarPath, isAdult } = defaults;
    const newProfile = await Profile.create({
      userId: userId,
      name: name,
      avatarPath: avatarPath,
      isAdult: isAdult ?? true,
      primaryProfile: true,
    });
    return newProfile;
  }
  findProfileByUserId(userId: string): Promise<IProfile | null> {
    return Profile.findOne({ where: { userId } });
  }
  findOrCreateMedia(mediaData: IMedia): Promise<[IMedia, boolean]> {
    const { mediaId, mediaType } = mediaData;
    return Media.findOrCreate({
      where: { mediaId: mediaId, mediaType: mediaType },
      defaults: { ...mediaData },
    });
  }
  addFavorite(
    profileId: string,
    mediaId: number,
    mediaType: MediaType
  ): Promise<[ProfileFavorite, boolean]> {
    return ProfileFavorite.findOrCreate({
      where: { profileId, mediaId, mediaType },
      defaults: { profileId, mediaId, mediaType },
    });
  }
  removeFavorite(profileId: string, mediaId: number, mediaType: MediaType): Promise<number> {
    return ProfileFavorite.destroy({
      where: { profileId, mediaId, mediaType },
    });
  }
  getProfileWithFavorites(profileId: string): Promise<IProfile | null> {
    return Profile.findByPk(profileId, {
      include: [
        {
          model: Media,
          as: TOKENS.sql.attributes.favoriteMedia,
          attributes: TOKENS.sql.attributes.mediaAttributes,
          through: { attributes: [TOKENS.sql.attributes.createdAt] },
        },
      ],
      order: [
        [
          { model: Media, as: TOKENS.sql.attributes.favoriteMedia },
          ProfileFavorite,
          TOKENS.sql.attributes.createdAt,
          TOKENS.sql.attributes.descending,
        ],
      ],
    });
  }
}
