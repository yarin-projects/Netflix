import { injectable } from 'inversify';
import { IPaymentRepository } from '../interfaces/payment-repository.interface';
import { Payment } from '../models/payment.model';
import { PaymentRecordDto } from '../dtos/payment-record.dto';

@injectable()
export class PaymentRepository implements IPaymentRepository {
  async createPayment(paymentData: PaymentRecordDto): Promise<Payment> {
    const newPayment = await Payment.create(paymentData);
    return newPayment;
  }
}
