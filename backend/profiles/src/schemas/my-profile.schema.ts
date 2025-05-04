import { z } from 'zod';
import { TOKENS } from '../utils/tokens.utils';

export const MyProfileSchema = z.object({
  userId: z
    .string({ required_error: TOKENS.validations.userId.required })
    .uuid(TOKENS.validations.userId.message),
});
