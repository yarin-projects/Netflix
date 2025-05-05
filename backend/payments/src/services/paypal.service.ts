import { inject, injectable } from 'inversify';
import { IPaypalService } from '../interfaces/paypal-service.interface';
import { TOKENS } from '../utils/tokens.utils';
import { IPaymentRepository } from '../interfaces/payment-repository.interface';
import { CreateOrderRequestDto } from '../dtos/create-order-request.dto';
import { CreateOrderResponseDto } from '../dtos/create-order-response.dto';
import { PLAN_PRICES } from '../configs/subscriptions.config';
import { logger } from '../configs/logger.config';
import { PaymentRecordDto } from '../dtos/payment-record.dto';
import { PaymentStatus } from '../enums/payment-status.enum';
import { PaymentMethod } from '../enums/payment-method.enum';
import { CaptureOrderRequestDto } from '../dtos/capture-order-request.dto';
import { CaptureOrderResponseDto } from '../dtos/capture-order-response.dto';
import { orderRecord } from '../dtos/order-record.dto';
import crypto from 'crypto';
import axios from 'axios';

const subscriptionsUrl = process.env.SUBSCRIPTIONS_INTERNAL_URL;
const internalSecret = process.env.INTERNAL_ROUTE_SECRET!;

const pendingOrders: orderRecord[] = [];

@injectable()
export class PaypalService implements IPaypalService {
  constructor(
    @inject(TOKENS.injections.iPaymentRepository) private paymentRepository: IPaymentRepository
  ) {}

  async createOrder(orderData: CreateOrderRequestDto): Promise<CreateOrderResponseDto> {
    const { subscriptionPlan, userId } = orderData;

    if (!PLAN_PRICES[subscriptionPlan]) {
      throw new Error(TOKENS.errors.invalidSubscription + subscriptionPlan);
    }

    const orderId = crypto.randomUUID();
    logger.info(TOKENS.messages.orderCreated + userId + subscriptionPlan);

    const orderRecord = {
      userId: userId,
      subscriptionPlan: subscriptionPlan,
      orderId: orderId,
      status: PaymentStatus.Pending,
    };
    pendingOrders.push(orderRecord);

    return { orderId };
  }
  async captureOrder(captureData: CaptureOrderRequestDto): Promise<CaptureOrderResponseDto> {
    const { orderId, userId } = captureData;

    const order = pendingOrders.find(order => order.orderId === orderId);
    if (!order) {
      throw new Error(TOKENS.errors.orderNotFound + orderId);
    }
    order.status = PaymentStatus.Completed;

    const planDetails = PLAN_PRICES[order.subscriptionPlan];

    const paymentDate = new Date();

    const paymentRecord: PaymentRecordDto = {
      userId: userId,
      subscriptionPlan: order.subscriptionPlan,
      transactionId: orderId,
      amount: planDetails.amount,
      currency: planDetails.currency,
      paymentDate: paymentDate,
      status: PaymentStatus.Completed,
      paymentMethod: PaymentMethod.Paypal,
    };

    const savedPayment = await this.paymentRepository.createPayment(paymentRecord);
    logger.info(TOKENS.messages.orderConfirmed + userId + order.subscriptionPlan);

    if (!subscriptionsUrl || !internalSecret) {
      logger.error(TOKENS.errors.invalidInternalSecret);
      throw new Error(TOKENS.errors.invalidInternalSecret);
    }
    const subscriptionPayload = {
      userId: userId,
      paymentDate: paymentDate,
      subscriptionPlan: order.subscriptionPlan,
      secret: internalSecret,
    };
    await axios.post(
      `${subscriptionsUrl}/internal/subscriptions/create-subscription`,
      subscriptionPayload,
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );

    return {
      paymentId: savedPayment.paymentId,
      transactionId: savedPayment.transactionId,
      status: savedPayment.status,
    };
  }
}
