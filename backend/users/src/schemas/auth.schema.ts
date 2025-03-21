import { z } from 'zod';
import { TOKENS } from '../utils/tokens.utils';

export const signUpSchema = z.object({
  email: z.string().email(TOKENS.validations.email.message),
  password: z
    .string()
    .min(TOKENS.validations.password.min.value, TOKENS.validations.password.min.message)
    .max(TOKENS.validations.password.max.value, TOKENS.validations.password.max.message),
});

export type signUpFormData = z.infer<typeof signUpSchema>;
