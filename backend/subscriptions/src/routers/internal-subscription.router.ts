import { Router, Request, Response } from 'express';
import { container } from '../configs/inversify.config';
import { TOKENS } from '../utils/tokens.utils';
import { InternalSubscriptionController } from '../controllers/internal-subscription.controller';
import { validate } from '../middlewares/validate.middleware';
import { verifyInternalSecret } from '../middlewares/verify-internal-secret.middleware';
import { createSubscriptionSchema } from '../schemas/create-subscription.schema';

const internalSubscriptionRouter: Router = Router();
const internalSubscriptionController = container.get<InternalSubscriptionController>(
  TOKENS.injections.internalSubscriptionController
);

internalSubscriptionRouter.post(
  TOKENS.routes.createSubscription,
  validate(createSubscriptionSchema),
  verifyInternalSecret,
  (req: Request, res: Response) => {
    internalSubscriptionController.createSubscription(req, res);
  }
);

export { internalSubscriptionRouter };
