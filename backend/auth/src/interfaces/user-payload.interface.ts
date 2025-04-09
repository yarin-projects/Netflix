import { SubscriptionPlan } from '../enums/subscription-plan.enum';

export interface IUserPayload {
  user_id: string;
  email: string;
  subscription_plan: SubscriptionPlan;
}
