import { MediaType } from '../enums/media-type.enum';
import { ProfileFavorite } from '../models/profile-favorite.model';
import { IMedia } from './media.interface';
import { ProfileDefaults } from './profile-defaults.interface';
import { IProfile } from './profile.interface';

export interface IProfileRepository {
  createDefaultProfile(userId: string, defaults: ProfileDefaults): Promise<IProfile>;
  findProfileByUserId(userId: string): Promise<IProfile | null>;
  findOrCreateMedia(mediaData: IMedia): Promise<[IMedia, boolean]>;
  addFavorite(
    profileId: string,
    mediaId: number,
    mediaType: MediaType
  ): Promise<[ProfileFavorite, boolean]>;
  removeFavorite(profileId: string, mediaId: number, mediaType: MediaType): Promise<number>;
  getProfileWithFavorites(profileId: string): Promise<IProfile | null>;
}
