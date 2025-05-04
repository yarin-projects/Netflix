import { IMedia } from './media.interface';

export interface IProfile {
  profileId: string;
  userId: string;
  primaryProfile: boolean;
  name: string;
  avatarPath: string;
  isAdult: boolean;
  favoriteMedia: IMedia[];
}
