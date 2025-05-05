import { SubscriptionPlan } from '../../enums/subscription-plan.enum';
import { routes } from './routes.tokens';
import 'dotenv/config';

const validUUID = 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa';
const validSecret = process.env.INTERNAL_ROUTE_SECRET!;
const invalidUUID = 'invalid-uuid';
const invalidSecret = 'invalid-secret';

const subscriptionsBasePath: string = routes.subscriptionsBasePath;
const internalSubscriptionsBasePath: string = routes.internalSubscriptionsBasePath;
const meRoute = subscriptionsBasePath + routes.me;
const createSubscriptionRoute = internalSubscriptionsBasePath + routes.createSubscription;

export const tests = {
  data: {
    valid: {
      subscription: {
        getMySubscriptionRequest: {
          userId: validUUID,
        },
        createSubscriptionRequest_Premium: {
          userId: validUUID,
          paymentDate: new Date().toISOString(),
          subscriptionPlan: SubscriptionPlan.Premium,
          secret: validSecret,
        },
        createSubscriptionRequest_Basic: {
          userId: validUUID,
          paymentDate: new Date().toISOString(),
          subscriptionPlan: SubscriptionPlan.Basic,
          secret: validSecret,
        },
      },
    },
    invalid: {
      subscription: {
        getMySubscription_MissingUser: {},
        getMySubscription_InvalidUser: { userId: invalidUUID },
        createSubscription_MissingUser: {
          paymentDate: new Date().toISOString(),
          subscriptionPlan: SubscriptionPlan.Standard,
          secret: validSecret,
        },
        createSubscription_MissingDate: {
          userId: validUUID,
          subscriptionPlan: SubscriptionPlan.Standard,
          secret: validSecret,
        },
        createSubscription_InvalidDate: {
          userId: validUUID,
          paymentDate: 'not-a-date',
          subscriptionPlan: SubscriptionPlan.Standard,
          secret: validSecret,
        },
        createSubscription_InvalidPlan: {
          userId: validUUID,
          paymentDate: new Date().toISOString(),
          subscriptionPlan: 'ULTRA',
          secret: validSecret,
        },
        createSubscription_MissingSecret: {
          userId: validUUID,
          paymentDate: new Date().toISOString(),
          subscriptionPlan: SubscriptionPlan.Standard,
        },
        createSubscription_InvalidSecret: {
          userId: validUUID,
          paymentDate: new Date().toISOString(),
          subscriptionPlan: SubscriptionPlan.Standard,
          secret: invalidSecret,
        },
      },
    },
  },
  routes: {
    getMySubscription: meRoute,
    createSubscription: createSubscriptionRoute,
  },
  suites: {
    subscriptionController: {
      title: 'Tests For Subscription Controller (Public Routes)',
      getMySubscription: {
        title: `Get My Subscription (GET ${meRoute})`,
        cases: {
          successActive: 'Should return 200 and active subscription details if found',
          successInactive: 'Should return 200 and inactive status if no subscription found',
          invalidBody: 'Should return 400 if userId is missing or invalid',
        },
      },
    },
    internalSubscriptionController: {
      title: 'Tests For Internal Subscription Controller',
      createSubscription: {
        title: `Create/Update Subscription (POST ${createSubscriptionRoute})`,
        cases: {
          successCreate: 'Should return 200 OK on successful creation/update',
          invalidBody: 'Should return 400 if body is invalid (missing fields, bad types)',
          secretFail: 'Should return 403/400 if internal secret middleware fails',
        },
      },
    },
  },
};
