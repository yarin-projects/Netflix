import { Container } from 'inversify';
import { TOKENS } from '../utils/tokens.utils';
import { PaypalController } from '../controllers/paypal.controller';
import { IPaypalService } from '../interfaces/paypal-service.interface';
import { PaypalService } from '../services/paypal.service';
import { IPaymentRepository } from '../interfaces/payment-repository.interface';
import { PaymentRepository } from '../repositories/payment.repository';

const container = new Container();

container.bind<PaypalController>(TOKENS.injections.paypalController).to(PaypalController);

container.bind<IPaypalService>(TOKENS.injections.iPaypalService).to(PaypalService);

container.bind<IPaymentRepository>(TOKENS.injections.iPaymentRepository).to(PaymentRepository);

export { container };
