import { Container } from 'inversify';
import { TOKENS } from '../utils/tokens.utils';
import { InternalSubscriptionController } from '../controllers/internal-subscription.controller';
import { ISubscriptionService } from '../interfaces/internal-subscription-service.interface';
import { SubscriptionService } from '../services/subscription.service';
import { IInternalSubscriptionService } from '../interfaces/subscription-service.interface';
import { InternalSubscriptionService } from '../services/internal-subscription.service';
import { ISubscriptionRepository } from '../interfaces/subscription-repository.interface';
import { SubscriptionRepository } from '../repositories/subscription.repository';
import { SubscriptionController } from '../controllers/subscription.controller';

const container = new Container();

container
  .bind<SubscriptionController>(TOKENS.injections.subscriptionController)
  .to(SubscriptionController);
container
  .bind<InternalSubscriptionController>(TOKENS.injections.internalSubscriptionController)
  .to(InternalSubscriptionController);

container
  .bind<ISubscriptionService>(TOKENS.injections.iSubscriptionService)
  .to(SubscriptionService);
container
  .bind<IInternalSubscriptionService>(TOKENS.injections.iInternalSubscriptionService)
  .to(InternalSubscriptionService);

container
  .bind<ISubscriptionRepository>(TOKENS.injections.iSubscriptionRepository)
  .to(SubscriptionRepository);

export { container };
