import { Currency } from '../enums/currency.enum';
import { SubscriptionPlan } from '../enums/subscription-plan.enum';

export const PLAN_PRICES: Record<SubscriptionPlan, { amount: number; currency: Currency }> = {
  [SubscriptionPlan.Basic]: { amount: 14.99, currency: Currency.USD },
  [SubscriptionPlan.Standard]: { amount: 29.99, currency: Currency.USD },
  [SubscriptionPlan.Premium]: { amount: 49.99, currency: Currency.USD },
  [SubscriptionPlan.None]: { amount: 0.0, currency: Currency.USD },
};
