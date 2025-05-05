import { z } from 'zod';
import { TOKENS } from '../utils/tokens.utils';
import { SubscriptionPlan } from '../enums/subscription-plan.enum';

export const createSubscriptionSchema = z.object({
  userId: z
    .string({ required_error: TOKENS.validations.userId.required })
    .uuid(TOKENS.validations.userId.message),
  paymentDate: z.coerce.date({ required_error: TOKENS.validations.paymentDate.required }),
  subscriptionPlan: z.nativeEnum(SubscriptionPlan, {
    required_error: TOKENS.validations.subscriptionPlan.message,
  }),
  secret: z
    .string({ required_error: TOKENS.validations.secret.required })
    .min(TOKENS.validations.secret.min.value, TOKENS.validations.secret.min.message)
    .max(TOKENS.validations.secret.max.value, TOKENS.validations.secret.max.message),
});
