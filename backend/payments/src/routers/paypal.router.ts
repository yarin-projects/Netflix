import { Request, Response, Router } from 'express';
import { container } from '../configs/inversify.config';
import { PaypalController } from '../controllers/paypal.controller';
import { TOKENS } from '../utils/tokens.utils';
import { validate } from '../middlewares/validate.middleware';
import { createOrderSchema } from '../schemas/create-order.schema';
import { captureOrderSchema } from '../schemas/capture-order.schema';

const paypalRouter: Router = Router();
const paypalController = container.get<PaypalController>(TOKENS.injections.paypalController);

paypalRouter.post(
  TOKENS.routes.paypal.createOrder,
  validate(createOrderSchema),
  (req: Request, res: Response) => {
    paypalController.createOrder(req, res);
  }
);

paypalRouter.post(
  TOKENS.routes.paypal.captureOrder,
  validate(captureOrderSchema),
  (req: Request, res: Response) => {
    paypalController.captureOrder(req, res);
  }
);

export { paypalRouter };
