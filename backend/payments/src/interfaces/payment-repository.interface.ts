import { PaymentRecordDto } from '../dtos/payment-record.dto';
import { Payment } from '../models/payment.model';

export interface IPaymentRepository {
  createPayment(paymentData: PaymentRecordDto): Promise<Payment>;
}
