import { MediaType } from '../enums/media-type.enum';
import { ProfileFavorite } from '../models/profile-favorite.model';
import { IMedia } from './media.interface';
import { IProfile } from './profile.interface';

export interface IProfileRepository {
  createDefaultProfile(
    userId: string,
    defaults: { name: string; avatarPath: string; isAdult?: boolean }
  ): Promise<IProfile>;
  findProfileByUserId(userId: string): Promise<IProfile | null>;
  countProfilesByUserId(userId: string): Promise<number>;
  findOrCreateMedia(mediaData: IMedia): Promise<[IMedia, boolean]>;
  addFavorite(
    profileId: string,
    mediaId: number,
    mediaType: MediaType
  ): Promise<[ProfileFavorite, boolean]>;
  removeFavorite(profileId: string, mediaId: number, mediaType: MediaType): Promise<number>;
  getProfileWithFavorites(profileId: string): Promise<IProfile | null>;
}
