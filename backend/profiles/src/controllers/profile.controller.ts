import { inject, injectable } from 'inversify';
import { IProfileService } from '../interfaces/profile-service.interface';
import { TOKENS } from '../utils/tokens.utils';
import { Request, Response } from 'express';
import { handleError } from '../utils/error-handler.utils';
import { MyProfileRequestDto } from '../dtos/my-profile-request.dto';
import { GetProfileFavoritesRequestDto } from '../dtos/get-profile-favorites-request.dto';
import { AddProfileFavoriteRequestDto } from '../dtos/add-profile-favorite-request.dto';
import { RemoveProfileFavoriteRequestDto } from '../dtos/remove-profile-favorite-request.dto';

@injectable()
export class ProfileController {
  constructor(@inject(TOKENS.injections.iProfileService) private profileService: IProfileService) {}

  async getMyProfile(req: Request, res: Response) {
    try {
      const { userId }: MyProfileRequestDto = req.body;

      const profile = await this.profileService.getProfileForUser(userId);
      if (!profile) {
        throw new Error(TOKENS.errors.profileNotFound + userId);
      }

      res.status(TOKENS.httpStatus.OK).json({ message: TOKENS.messages.foundProfile, profile });
    } catch (error) {
      handleError(res, error);
    }
  }
  async getFavorites(req: Request, res: Response) {
    try {
      const { profileId, userId }: GetProfileFavoritesRequestDto = req.body;

      const favorites = await this.profileService.getFavorites(profileId, userId);

      res.status(TOKENS.httpStatus.OK).json({ message: TOKENS.messages.foundFavorites, favorites });
    } catch (error) {
      handleError(res, error);
    }
  }
  async addFavorite(req: Request, res: Response) {
    try {
      const { profileId, userId, ...favoriteData }: AddProfileFavoriteRequestDto = req.body;

      const wasFavoriteAdded = await this.profileService.addFavorite(
        profileId,
        userId,
        favoriteData
      );

      const { status, message } = {
        status: wasFavoriteAdded ? TOKENS.httpStatus.CREATED : TOKENS.httpStatus.OK,
        message: wasFavoriteAdded
          ? TOKENS.messages.favoriteAdded
          : TOKENS.messages.alreadyInFavorites,
      };

      res.status(status).json(message);
    } catch (error) {
      handleError(res, error);
    }
  }

  async removeFavorite(req: Request, res: Response) {
    try {
      const { profileId, userId, mediaId, mediaType }: RemoveProfileFavoriteRequestDto = req.body;

      const wasFavoriteRemoved = await this.profileService.removeFavorite(
        profileId,
        userId,
        mediaId,
        mediaType
      );

      if (!wasFavoriteRemoved) {
        throw new Error(TOKENS.errors.favoriteNotFound);
      }

      res.status(TOKENS.httpStatus.OK).json({ message: TOKENS.messages.favoriteRemoved });
    } catch (error) {
      handleError(res, error);
    }
  }
}
