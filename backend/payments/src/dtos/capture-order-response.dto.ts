import { PaymentStatus } from '../enums/payment-status.enum';

export interface CaptureOrderResponseDto {
  paymentId: string;
  transactionId: string;
  status: PaymentStatus;
}
