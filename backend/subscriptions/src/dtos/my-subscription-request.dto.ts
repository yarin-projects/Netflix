import { z } from 'zod';
import { getMySubscriptionSchema } from '../schemas/my-subscription.schema';

export type MySubscriptionRequestDto = z.infer<typeof getMySubscriptionSchema>;
