import { inject, injectable } from 'inversify';
import { IPaypalService } from '../interfaces/paypal-service.interface';
import { TOKENS } from '../utils/tokens.utils';
import { Request, Response } from 'express';
import { CreateOrderRequestDto } from '../dtos/create-order-request.dto';
import { handleError } from '../utils/error-handler.utils';
import { CaptureOrderRequestDto } from '../dtos/capture-order-request.dto';

@injectable()
export class PaypalController {
  constructor(@inject(TOKENS.injections.iPaypalService) private paypalService: IPaypalService) {}

  async createOrder(req: Request, res: Response) {
    try {
      const createOrderData: CreateOrderRequestDto = req.body;

      const responseDto = await this.paypalService.createOrder(createOrderData);

      res
        .status(TOKENS.httpStatus.OK)
        .json({ message: TOKENS.messages.orderCreated, data: responseDto });
    } catch (error) {
      handleError(res, error);
    }
  }
  async captureOrder(req: Request, res: Response) {
    try {
      const captureOrderData: CaptureOrderRequestDto = req.body;

      const responseDto = await this.paypalService.captureOrder(captureOrderData);

      res
        .status(TOKENS.httpStatus.OK)
        .json({ message: TOKENS.messages.orderConfirmed, data: responseDto });
    } catch (error) {
      handleError(res, error);
    }
  }
}
