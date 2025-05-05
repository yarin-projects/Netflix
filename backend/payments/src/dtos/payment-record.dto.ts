import { Payment } from '../models/payment.model';

export type PaymentRecordDto = Pick<
  Payment,
  | 'userId'
  | 'subscriptionPlan'
  | 'transactionId'
  | 'amount'
  | 'currency'
  | 'paymentDate'
  | 'status'
  | 'paymentMethod'
>;
