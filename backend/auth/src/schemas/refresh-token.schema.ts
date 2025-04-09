import { z } from 'zod';
import { TOKENS } from '../utils/tokens.utils';
import { SubscriptionPlan } from '../enums/subscription-plan.enum';

export const refreshTokenSchema = z.object({
  refreshToken: z
    .string()
    .min(TOKENS.validations.refreshToken.min, TOKENS.validations.refreshToken.message),
  ipAddress: z.string().ip(TOKENS.validations.ipAddress.message),
  userAgent: z
    .string()
    .min(TOKENS.validations.userAgent.min.value, TOKENS.validations.userAgent.min.message)
    .max(TOKENS.validations.userAgent.max.value, TOKENS.validations.userAgent.max.message),
  userId: z.string().uuid(TOKENS.validations.userId.message),
  email: z.string().email(TOKENS.validations.email.message),
  subscriptionPlan: z.nativeEnum(SubscriptionPlan, {
    required_error: TOKENS.validations.subscriptionPlan.message,
  }),
});
