import { MediaCardDto } from '../dtos/media-card.dto';
import { myProfileDto } from '../dtos/my-profile.dto';
import { IMedia } from './media.interface';

export interface IProfileService {
  getProfileForUser(userId: string): Promise<myProfileDto | null>;
  addFavorite(profileId: string, userId: string, favoriteData: IMedia): Promise<boolean>;
  removeFavorite(profileId: string, userId: string, favoriteData: IMedia): Promise<boolean>;
  getFavorites(profileId: string, userId: string): Promise<MediaCardDto[]>;
}
