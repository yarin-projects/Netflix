import { secretLength } from './tests.tokens';

const required = 'is required';
export const validations = {
  userId: {
    required: `User Id ` + required,
    message: 'Invalid user id',
  },
  email: {
    required: 'Email ' + required,
    message: 'Invalid email',
  },
  ipAddress: {
    required: 'Ip address ' + required,
    message: 'Invalid ip address',
  },
  userAgent: {
    required: 'User agent ' + required,
    min: {
      value: 1,
      message: 'User agent is required',
    },
    max: {
      value: 1024,
      message: 'Invalid user agent',
    },
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
  subscriptionPlan: {
    message: 'Subscription plan is required',
  },
  refreshToken: {
    required: 'Refresh token ' + required,
    min: 1,
    message: 'Refresh token is required',
  },
};
