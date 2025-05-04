import { z } from 'zod';
import { TOKENS } from '../utils/tokens.utils';

export const createDefaultProfileSchema = z.object({
  userId: z
    .string({ required_error: TOKENS.validations.userId.required })
    .uuid(TOKENS.validations.userId.message),
  secret: z
    .string({ required_error: TOKENS.validations.secret.required })
    .min(TOKENS.validations.secret.min.value, TOKENS.validations.secret.min.message)
    .max(TOKENS.validations.secret.max.value, TOKENS.validations.secret.max.message),
});
