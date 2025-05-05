import { inject, injectable } from 'inversify';
import { ISubscriptionRepository } from '../interfaces/subscription-repository.interface';
import { TOKENS } from '../utils/tokens.utils';
import { logger } from '../configs/logger.config';
import { Subscription } from '../models/subscription.model';
import { IInternalSubscriptionService } from '../interfaces/subscription-service.interface';
import { CreateSubscriptionRequestDto } from '../dtos/create-subscription-request.dto';
import { SUBSCRIPTION_DURATIONS_DAYS } from '../configs/subscriptions.config';
import { SubscriptionDto } from '../dtos/subscription.dto';

@injectable()
export class InternalSubscriptionService implements IInternalSubscriptionService {
  constructor(
    @inject(TOKENS.injections.iSubscriptionRepository)
    private subscriptionRepository: ISubscriptionRepository
  ) {}

  async createOrUpdateSubscription(
    data: Omit<CreateSubscriptionRequestDto, 'secret'>
  ): Promise<Subscription> {
    const { userId, paymentDate, subscriptionPlan } = data;

    const durationDays = SUBSCRIPTION_DURATIONS_DAYS[subscriptionPlan] ?? 0;
    const startDate = new Date(paymentDate);
    let endDate = new Date(startDate);
    if (durationDays > 0) {
      endDate.setDate(startDate.getDate() + durationDays);
    } else {
      endDate = startDate;
      logger.warn(TOKENS.messages.invalidSubscriptionPlan + userId + ', ' + subscriptionPlan);
    }

    const subscriptionData: SubscriptionDto = {
      userId,
      plan: subscriptionPlan,
      startDate,
      endDate,
    };

    logger.info(
      TOKENS.messages.updatingSubscription +
        userId +
        ', ' +
        subscriptionPlan +
        TOKENS.messages.subscriptionDate +
        startDate +
        ', ' +
        endDate
    );

    const [upsertedSubscription, _] = await this.subscriptionRepository.upsertSubscription(
      subscriptionData
    );

    if (!upsertedSubscription) {
      logger.error(TOKENS.errors.subscriptionNotFound + userId);
      throw new Error(TOKENS.errors.subscriptionNotFound + userId);
    }

    return upsertedSubscription;
  }
}
