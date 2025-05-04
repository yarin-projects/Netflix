import { z } from 'zod';
import { TOKENS } from '../utils/tokens.utils';
import { MediaType } from '../enums/media-type.enum';

export const addProfileFavoriteSchema = z.object({
  userId: z
    .string({ required_error: TOKENS.validations.userId.required })
    .uuid(TOKENS.validations.userId.message),
  profileId: z
    .string({ required_error: TOKENS.validations.profileId.required })
    .uuid(TOKENS.validations.profileId.message),
  mediaId: z.number({ required_error: TOKENS.validations.mediaId.required }),
  mediaType: z.nativeEnum(MediaType, { required_error: TOKENS.validations.mediaType.required }),
  title: z.string({ required_error: TOKENS.validations.title.required }),
  posterPath: z.string({ required_error: TOKENS.validations.posterPath.required }),
  releaseYear: z.number({ required_error: TOKENS.validations.releaseYear.required }),
  voteAverage: z.number({ required_error: TOKENS.validations.voteAverage.required }),
});
