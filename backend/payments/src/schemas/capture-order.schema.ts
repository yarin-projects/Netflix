import { z } from 'zod';
import { TOKENS } from '../utils/tokens.utils';

export const captureOrderSchema = z.object({
  userId: z
    .string({ required_error: TOKENS.validations.userId.required })
    .uuid(TOKENS.validations.userId.message),
  orderId: z
    .string({ required_error: TOKENS.validations.orderId.required })
    .uuid(TOKENS.validations.orderId.message),
});
