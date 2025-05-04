import { z } from 'zod';
import { TOKENS } from '../utils/tokens.utils';
import { MediaType } from '../enums/media-type.enum';

export const removeProfileFavoriteSchema = z.object({
  userId: z
    .string({ required_error: TOKENS.validations.userId.required })
    .uuid(TOKENS.validations.userId.message),
  profileId: z
    .string({ required_error: TOKENS.validations.profileId.required })
    .uuid(TOKENS.validations.profileId.message),
  mediaId: z.number({ required_error: TOKENS.validations.mediaId.required }),
  mediaType: z.nativeEnum(MediaType, { required_error: TOKENS.validations.mediaType.required }),
});
