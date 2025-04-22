import { SubscriptionPlan } from '../enums/subscription-plan.enum';

export interface IUserPayload {
  userId: string;
  email: string;
  subscriptionPlan: SubscriptionPlan;
}
