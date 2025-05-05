import { PaymentStatus } from '../enums/payment-status.enum';
import { SubscriptionPlan } from '../enums/subscription-plan.enum';

export type orderRecord = {
  userId: string;
  subscriptionPlan: SubscriptionPlan;
  orderId: string;
  status: PaymentStatus;
};
