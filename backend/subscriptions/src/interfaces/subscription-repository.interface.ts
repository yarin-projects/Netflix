import { SubscriptionDto } from '../dtos/subscription.dto';
import { Subscription } from '../models/subscription.model';

export interface ISubscriptionRepository {
  findSubscriptionByUserId(userId: string): Promise<Subscription | null>;
  upsertSubscription(subscriptionData: SubscriptionDto): Promise<[Subscription, boolean | null]>;
}
