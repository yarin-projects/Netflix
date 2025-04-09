import { z } from 'zod';
import { TOKENS } from '../utils/tokens.utils';
import { SubscriptionPlan } from '../enums/subscription-plan.enum';

export const generateTokenSchema = z.object({
  user_id: z.string().uuid(TOKENS.validations.userId.message),
  email: z.string().email(TOKENS.validations.email.message),
  ipAddress: z.string().ip(TOKENS.validations.ipAddress.message),
  userAgent: z
    .string()
    .min(TOKENS.validations.userAgent.min.value, TOKENS.validations.userAgent.min.message)
    .max(TOKENS.validations.userAgent.max.value, TOKENS.validations.userAgent.max.message),
  secret: z
    .string()
    .min(TOKENS.validations.secret.min.value, TOKENS.validations.secret.min.message)
    .max(TOKENS.validations.secret.max.value, TOKENS.validations.secret.max.message),
  subscription_plan: z.nativeEnum(SubscriptionPlan).optional().nullable(),
});
