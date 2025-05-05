import { inject, injectable } from 'inversify';
import { IPaypalService } from '../interfaces/paypal-service.interface';
import { TOKENS } from '../utils/tokens.utils';

@injectable()
export class PaypalController {
  constructor(@inject(TOKENS.injections.iPaypalService) private paypalService: IPaypalService) {}
}
