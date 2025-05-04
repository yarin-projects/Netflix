import { z } from 'zod';
import { addProfileFavoriteSchema } from '../schemas/add-profile-favorite.schema';

export type AddProfileFavoriteRequestDto = z.infer<typeof addProfileFavoriteSchema>;
