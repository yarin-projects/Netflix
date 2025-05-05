import { z } from 'zod';
import { TOKENS } from '../utils/tokens.utils';
import { SubscriptionPlan } from '../enums/subscription-plan.enum';

export const createOrderSchema = z.object({
  userId: z
    .string({ required_error: TOKENS.validations.userId.required })
    .uuid(TOKENS.validations.userId.message),
  subscriptionPlan: z.nativeEnum(SubscriptionPlan, {
    required_error: TOKENS.validations.subscriptionPlanId.message,
  }),
});
