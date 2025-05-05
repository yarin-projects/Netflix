import { SubscriptionPlan } from '../enums/subscription-plan.enum';

export const SUBSCRIPTION_DURATIONS_DAYS: Record<SubscriptionPlan, number> = {
  [SubscriptionPlan.Basic]: 60,
  [SubscriptionPlan.Standard]: 150,
  [SubscriptionPlan.Premium]: 365,
  [SubscriptionPlan.None]: 0,
};
