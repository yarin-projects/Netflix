import { Request, Response, Router } from 'express';
import { container } from '../configs/inversify.config';
import { ProfileController } from '../controllers/profile.controller';
import { TOKENS } from '../utils/tokens.utils';
import { validate } from '../middlewares/validate.middleware';
import { MyProfileSchema } from '../schemas/my-profile.schema';
import { getProfileFavoritesSchema } from '../schemas/get-profile-favorites.schema';
import { addProfileFavoriteSchema } from '../schemas/add-profile-favorite.schema';
import { removeProfileFavoriteSchema } from '../schemas/remove-profile-favorite.schema';

const profileRouter: Router = Router();
const profileController = container.get<ProfileController>(TOKENS.injections.profileController);

profileRouter.get(TOKENS.routes.me, validate(MyProfileSchema), (req: Request, res: Response) => {
  profileController.getMyProfile(req, res);
});

profileRouter.get(
  TOKENS.routes.favorites.get,
  validate(getProfileFavoritesSchema),
  (req: Request, res: Response) => {
    profileController.getFavorites(req, res);
  }
);

profileRouter.post(
  TOKENS.routes.favorites.add,
  validate(addProfileFavoriteSchema),
  (req: Request, res: Response) => {
    profileController.addFavorite(req, res);
  }
);

profileRouter.delete(
  TOKENS.routes.favorites.remove,
  validate(removeProfileFavoriteSchema),
  (req: Request, res: Response) => {
    profileController.removeFavorite(req, res);
  }
);

export { profileRouter };
