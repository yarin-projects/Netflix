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
  title: z
    .string({ required_error: TOKENS.validations.title.required })
    .min(TOKENS.validations.title.min.value, TOKENS.validations.title.min.message)
    .max(TOKENS.validations.title.max.value, TOKENS.validations.title.max.message),
  posterPath: z
    .string({ required_error: TOKENS.validations.posterPath.required })
    .min(TOKENS.validations.posterPath.min.value, TOKENS.validations.posterPath.min.message)
    .max(TOKENS.validations.posterPath.max.value, TOKENS.validations.posterPath.max.message),
  releaseYear: z
    .number({ required_error: TOKENS.validations.releaseYear.required })
    .min(TOKENS.validations.releaseYear.min.value, TOKENS.validations.releaseYear.min.message)
    .max(TOKENS.validations.releaseYear.max.value, TOKENS.validations.releaseYear.max.message),
  voteAverage: z
    .number({ required_error: TOKENS.validations.voteAverage.required })
    .min(TOKENS.validations.voteAverage.min.value, TOKENS.validations.voteAverage.min.message)
    .max(TOKENS.validations.voteAverage.max.value, TOKENS.validations.voteAverage.max.message),
});
