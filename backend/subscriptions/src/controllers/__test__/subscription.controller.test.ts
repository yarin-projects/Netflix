import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { TOKENS } from '../../utils/tokens.utils';
import { ISubscriptionService } from '../../interfaces/internal-subscription-service.interface';
import { MySubscriptionRequestDto } from '../../dtos/my-subscription-request.dto';
import { handleError } from '../../utils/error-handler.utils';

@injectable()
export class SubscriptionController {
  constructor(
    @inject(TOKENS.injections.iSubscriptionService)
    private subscriptionService: ISubscriptionService
  ) {}

  async getMySubscription(req: Request, res: Response) {
    try {
      const { userId }: MySubscriptionRequestDto = req.body;

      const subscriptionStatus = await this.subscriptionService.getMySubscriptionStatus(userId);

      if (!subscriptionStatus) {
        return res.status(TOKENS.httpStatus.OK).json(TOKENS.messages.inactiveSubscription);
      }

      res.status(TOKENS.httpStatus.OK).json({
        message: TOKENS.messages.subscriptionFound,
        subscription: subscriptionStatus,
      });
    } catch (error) {
      handleError(res, error);
    }
  }
}
