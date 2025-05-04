import { z } from 'zod';
import { getProfileFavoritesSchema } from '../schemas/get-profile-favorites.schema';

export type GetProfileFavoritesRequestDto = z.infer<typeof getProfileFavoritesSchema>;
