import { internalSecretLength } from "../env-variables-check.utils";

export const validations = {
  userId: {
    message: 'Invalid user id',
  },
  email: {
    message: 'Invalid email',
  },
  ipAddress: {
    message: 'Invalid ip address',
  },
  userAgent: {
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
    min: {
      value: 1,
      message: 'Secret is required',
    },
    max: {
      value: internalSecretLength,
      message: 'Invalid secret',
    },
  },
  subscriptionPlan: {
    message: 'Subscription plan is required',
  },
  refreshToken: {
    min: 1,
    message: 'Refresh token is required',
  },
};
