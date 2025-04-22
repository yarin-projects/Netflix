import { z } from 'zod';
import { TOKENS } from '../utils/tokens.utils';
import { SubscriptionPlan } from '../enums/subscription-plan.enum';

export const generateTokenSchema = z.object({
  userId: z.string({ required_error: TOKENS.validations.userId.required }).uuid(TOKENS.validations.userId.message),
  email: z.string({ required_error: TOKENS.validations.email.required }).email(TOKENS.validations.email.message),
  ipAddress: z.string({ required_error: TOKENS.validations.ipAddress.required }).ip(TOKENS.validations.ipAddress.message),
  userAgent: z
    .string({ required_error: TOKENS.validations.userAgent.required })
    .min(TOKENS.validations.userAgent.min.value, TOKENS.validations.userAgent.min.message)
    .max(TOKENS.validations.userAgent.max.value, TOKENS.validations.userAgent.max.message),
  secret: z
    .string({ required_error: TOKENS.validations.secret.required })
    .min(TOKENS.validations.secret.min.value, TOKENS.validations.secret.min.message)
    .max(TOKENS.validations.secret.max.value, TOKENS.validations.secret.max.message),
  subscriptionPlan: z.nativeEnum(SubscriptionPlan).optional().nullable(),
});
