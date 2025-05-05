import { Router, Request, Response } from 'express';
import { container } from '../configs/inversify.config';
import { TOKENS } from '../utils/tokens.utils';
import { validate } from '../middlewares/validate.middleware';
import { getMySubscriptionSchema } from '../schemas/my-subscription.schema';
import { SubscriptionController } from '../controllers/subscription.controller';

const subscriptionRouter: Router = Router();
const subscriptionController = container.get<SubscriptionController>(
  TOKENS.injections.subscriptionController
);

subscriptionRouter.get(
  TOKENS.routes.me,
  validate(getMySubscriptionSchema),
  (req: Request, res: Response) => {
    subscriptionController.getMySubscription(req, res);
  }
);

export { subscriptionRouter };
