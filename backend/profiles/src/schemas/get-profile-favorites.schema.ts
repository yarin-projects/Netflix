import { z } from 'zod';
import { TOKENS } from '../utils/tokens.utils';

export const getProfileFavoritesSchema = z.object({
  userId: z
    .string({ required_error: TOKENS.validations.userId.required })
    .uuid(TOKENS.validations.userId.message),
  profileId: z
    .string({ required_error: TOKENS.validations.profileId.required })
    .uuid(TOKENS.validations.profileId.message),
});
