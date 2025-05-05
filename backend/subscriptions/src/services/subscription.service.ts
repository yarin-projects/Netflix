import { inject, injectable } from 'inversify';
import { ISubscriptionRepository } from '../interfaces/subscription-repository.interface';
import { TOKENS } from '../utils/tokens.utils';
import { logger } from '../configs/logger.config';
import { ISubscriptionService } from '../interfaces/internal-subscription-service.interface';
import { MySubscriptionResponseDto } from '../dtos/my-subscription-response.dto';

@injectable()
export class SubscriptionService implements ISubscriptionService {
  constructor(
    @inject(TOKENS.injections.iSubscriptionRepository)
    private subscriptionRepository: ISubscriptionRepository
  ) {}

  async getMySubscriptionStatus(userId: string): Promise<MySubscriptionResponseDto | null> {
    const subscription = await this.subscriptionRepository.findSubscriptionByUserId(userId);

    if (!subscription) {
      logger.info(TOKENS.errors.subscriptionNotFound + userId);
      throw new Error(TOKENS.errors.subscriptionNotFound + userId);
    }

    const isActive = subscription.active;

    return {
      plan: subscription.plan,
      status: isActive ? 'active' : 'inactive',
      endDate: subscription.endDate,
    };
  }
}
