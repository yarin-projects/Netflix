import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { TOKENS } from '../utils/tokens.utils';
import { handleError } from '../utils/error-handler.utils';
import { IInternalSubscriptionService } from '../interfaces/subscription-service.interface';
import { CreateSubscriptionRequestDto } from '../dtos/create-subscription-request.dto';

@injectable()
export class InternalSubscriptionController {
  constructor(
    @inject(TOKENS.injections.iInternalSubscriptionService)
    private internalSubService: IInternalSubscriptionService
  ) {}

  async createSubscription(req: Request, res: Response) {
    try {
      const subscriptionData: Omit<CreateSubscriptionRequestDto, 'secret'> = req.body;
      const result = await this.internalSubService.createOrUpdateSubscription(subscriptionData);
      res.status(TOKENS.httpStatus.OK).json({
        message: TOKENS.messages.subscriptionUpdated + result.userId,
        subscriptionId: result.subscriptionId,
      });
    } catch (error) {
      handleError(res, error);
    }
  }
}
