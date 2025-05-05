import { CreateSubscriptionRequestDto } from '../dtos/create-subscription-request.dto';
import { Subscription } from '../models/subscription.model';

export interface IInternalSubscriptionService {
  createOrUpdateSubscription(
    data: Omit<CreateSubscriptionRequestDto, 'secret'>
  ): Promise<Subscription>;
}
