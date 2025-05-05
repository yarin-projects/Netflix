import { SubscriptionPlan } from '../enums/subscription-plan.enum';

export interface MySubscriptionResponseDto {
  plan: SubscriptionPlan;
  status: 'active' | 'inactive';
  endDate?: Date | null;
}
