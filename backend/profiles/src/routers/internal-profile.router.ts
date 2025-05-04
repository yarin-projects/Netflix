import { Request, Response, Router } from 'express';
import { container } from '../configs/inversify.config';
import { TOKENS } from '../utils/tokens.utils';
import { InternalProfileController } from '../controllers/internal-profile.controller';
import { verifyInternalSecret } from '../middlewares/verify-internal-secret.middleware';
import { validate } from '../middlewares/validate.middleware';
import { createDefaultProfileSchema } from '../schemas/create-default-profile.schema';

const internalProfileRouter: Router = Router();
const internalProfileController = container.get<InternalProfileController>(
  TOKENS.injections.internalProfileController
);

internalProfileRouter.post(
  TOKENS.routes.createDefualt,
  validate(createDefaultProfileSchema),
  verifyInternalSecret,
  (req: Request, res: Response) => {
    internalProfileController.createDefaultProfile(req, res);
  }
);

export { internalProfileRouter };
