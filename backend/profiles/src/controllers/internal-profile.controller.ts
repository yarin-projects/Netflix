import { inject, injectable } from 'inversify';
import { TOKENS } from '../utils/tokens.utils';
import { IInternalProfileService } from '../interfaces/internal-profile-service.interface';
import { Request, Response } from 'express';
import { handleError } from '../utils/error-handler.utils';
import { CreateDefaultProfileRequestDto } from '../dtos/create-default-profile-request.dto';

@injectable()
export class InternalProfileController {
  constructor(
    @inject(TOKENS.injections.iInternalProfileService)
    private internalProfileService: IInternalProfileService
  ) {}

  async createDefaultProfile(req: Request, res: Response) {
    try {
      const { userId }: CreateDefaultProfileRequestDto = req.body;
      const profile = await this.internalProfileService.createDefaultProfile(userId);
      res
        .status(TOKENS.httpStatus.CREATED)
        .json({ message: TOKENS.messages.defaultProfileCreated, profile });
    } catch (error) {
      handleError(res, error);
    }
  }
}
