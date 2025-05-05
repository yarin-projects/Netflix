import { Subscription } from '../models/subscription.model';

export type SubscriptionDto = Pick<Subscription, 'userId' | 'plan' | 'startDate' | 'endDate'>;
