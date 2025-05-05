import { SubscriptionPlan } from '../../enums/subscription-plan.enum';
import { routes } from './routes.tokens';

const validUUID = 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa';
const invalidUUID = 'invalid-uuid';

const paymentsBasePath: string = routes.paymentsBasePath;
const createOrderRoute = paymentsBasePath + routes.paypal.createOrder;
const captureOrderRoute = paymentsBasePath + routes.paypal.captureOrder;

export const tests = {
  data: {
    valid: {
      payment: {
        createOrderRequest_Premium: {
          userId: validUUID,
          subscriptionPlan: SubscriptionPlan.Premium,
        },
        createOrderRequest_Basic: {
          userId: validUUID,
          subscriptionPlan: SubscriptionPlan.Basic,
        },
        captureOrderRequest: {
          userId: validUUID,
          orderId: '',
        },
      },
    },
    invalid: {
      payment: {
        createOrder_MissingPlan: { userId: validUUID },
        createOrder_InvalidPlan: { userId: validUUID, subscriptionPlan: 'ULTIMATE' },
        createOrder_MissingUser: { subscriptionPlan: SubscriptionPlan.Standard },
        captureOrder_MissingOrderId: { userId: validUUID },
        captureOrder_InvalidOrderId: { userId: validUUID, orderId: invalidUUID },
        captureOrder_NotFoundOrderId: {
          userId: validUUID,
          orderId: 'e2e2e2e2-e2e2-e2e2-e2e2-e2e2e2e2e2e2',
        },
      },
    },
  },
  routes: {
    createOrder: createOrderRoute,
    captureOrder: captureOrderRoute,
  },
  suites: {
    paypalController: {
      title: 'Tests For Paypal Controller (Payment Simulation)',
      createOrder: {
        title: `Create Order (POST ${createOrderRoute})`,
        cases: {
          success: 'Should return 200 OK and a mock orderId for a valid plan',
          invalidPlan: 'Should return 400 if subscriptionPlan is invalid or missing',
          missingUser: 'Should return 400 if userId is missing',
        },
      },
      captureOrder: {
        title: `Capture Order (POST ${captureOrderRoute})`,
        cases: {
          success: 'Should return 200 OK and payment details on successful capture',
          invalidOrderId: 'Should return 400 if orderId format is invalid',
          orderNotFound: 'Should return 400 if orderId does not match a pending order',
          missingOrderId: 'Should return 400 if orderId is missing',
          internalCallFail: 'Should return 500 if internal call to subscriptions fails',
        },
      },
    },
  },
};
