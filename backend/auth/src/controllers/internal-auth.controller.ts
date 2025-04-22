import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { TOKENS } from '../utils/tokens.utils';
import { IInternalAuthService } from '../interfaces/internal-auth-service.interface';
import { handleError } from '../utils/error-handler.utils';
import { GenerateTokensRequestDto } from '../dtos/generate-tokens-request.dto';
import { IUserPayload } from '../interfaces/user-payload.interface';
import { ITokenMetaData } from '../interfaces/token-meta-data.interface';
import { SubscriptionPlan } from '../enums/subscription-plan.enum';

@injectable()
export class InternalAuthController {
  constructor(
    @inject(TOKENS.injections.iInternalAuthService)
    private internalAuthService: IInternalAuthService
  ) {}
  async generateTokens(req: Request, res: Response) {
    try {
      const { ...requestData }: GenerateTokensRequestDto = req.body;
      const tokenMetaData: ITokenMetaData = requestData;
      let { subscriptionPlan } = requestData;
      if (!subscriptionPlan) {
        subscriptionPlan = SubscriptionPlan.None;
      }
      const payload: IUserPayload = { ...requestData, subscriptionPlan };

      const tokens = await this.internalAuthService.generateTokens(tokenMetaData, payload);

      res.status(TOKENS.httpStatus.OK).json(tokens);
    } catch (error) {
      handleError(res, error);
    }
  }
}
