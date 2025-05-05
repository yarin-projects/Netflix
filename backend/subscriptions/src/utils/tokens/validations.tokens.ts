import 'dotenv/config';

const { INTERNAL_ROUTE_SECRET } = process.env;
const secretLength = INTERNAL_ROUTE_SECRET!.length;

const required = 'is required';
export const validations = {
  userId: {
    required: `User Id ` + required,
    message: 'Invalid user id',
  },
  subscriptionPlan: {
    required: `Subscription Plan ` + required,
    message: 'Invalid subscription plan',
  },
  secret: {
    required: 'Secret ' + required,
    min: {
      value: 1,
      message: 'Secret is required',
    },
    max: {
      value: secretLength,
      message: 'Invalid secret',
    },
  },
  paymentDate: {
    required: 'Payment date ' + required,
    message: 'Invalid payment date',
  },
};
