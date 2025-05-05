import { injectable } from 'inversify';
import { ISubscriptionRepository } from '../interfaces/subscription-repository.interface';
import { Subscription } from '../models/subscription.model';
import { logger } from '../configs/logger.config';
import { SubscriptionDto } from '../dtos/subscription.dto';
import { TOKENS } from '../utils/tokens.utils';

@injectable()
export class SubscriptionRepository implements ISubscriptionRepository {
  async findSubscriptionByUserId(userId: string): Promise<Subscription | null> {
    return Subscription.findOne({ where: { userId } });
  }

  async upsertSubscription(
    subscriptionData: SubscriptionDto
  ): Promise<[Subscription, boolean | null]> {
    const [subscription, created] = await Subscription.upsert(subscriptionData, {
      returning: true,
    });

    if (!created) {
      logger.info(TOKENS.messages.subscriptionUpdated, subscription.userId);
    }

    return [subscription, created];
  }
}
