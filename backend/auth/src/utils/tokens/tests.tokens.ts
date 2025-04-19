import { SubscriptionPlan } from '../../enums/subscription-plan.enum';
import { internalSecret } from '../env-variables-check.utils';
import { routes } from './routes.tokens';

const validRefreshToken = 'some-valid-looking-jwt-refresh-token-string';
const validUUID = 'a0a0a0a0-a0a0-a0a0-a0a0-a0a0a0a0a0a0';
const validEmail = 'test@example.com';
const validIp = '198.51.100.1';
const validUserAgent = 'Mozilla/5.0 Jest Test Agent';
const validSecret = internalSecret;

const invalidUUID = 'invalid-uuid';
const invalidEmail = 'invalid-email';
const invalidIp = 'invalid-ip';

const refreshRoute: string = routes.authBasePath + routes.refreshTokens;
const meRoute: string = routes.authBasePath + routes.me;
const generateRoute: string = routes.internalBasePath + routes.generateTokens;

export const tests = {
  data: {
    valid: {
      auth: {
        refreshRequest: {
          refreshToken: validRefreshToken,
          userId: validUUID,
          email: validEmail,
          ipAddress: validIp,
          userAgent: validUserAgent,
          subscriptionPlan: SubscriptionPlan.Premium,
        },
      },
      internalAuth: {
        generateRequest: {
          userId: validUUID,
          email: validEmail,
          ipAddress: validIp,
          userAgent: validUserAgent,
          secret: validSecret,
          subscriptionPlan: SubscriptionPlan.Basic,
        },
      },
    },
    invalid: {
      auth: {
        refreshRequest_MissingToken: {
          userId: validUUID,
          email: validEmail,
          ipAddress: validIp,
          userAgent: validUserAgent,
          subscriptionPlan: SubscriptionPlan.Premium,
        },
        refreshRequest_InvalidUserId: {
          refreshToken: validRefreshToken,
          userId: invalidUUID,
          email: validEmail,
          ipAddress: validIp,
          userAgent: validUserAgent,
          subscriptionPlan: SubscriptionPlan.Premium,
        },
        refreshRequest_InvalidIpAddress: {
          refreshToken: validRefreshToken,
          userId: validUUID,
          email: validEmail,
          ipAddress: invalidIp,
          userAgent: validUserAgent,
          subscriptionPlan: SubscriptionPlan.Premium,
        },
      },
      internalAuth: {
        generateRequest_MissingUserId: {
          email: validEmail,
          ipAddress: validIp,
          userAgent: validUserAgent,
          secret: validSecret,
          subscriptionPlan: SubscriptionPlan.Basic,
        },
        generateRequest_MissingSecret: {
          userId: validUUID,
          email: validEmail,
          ipAddress: validIp,
          userAgent: validUserAgent,
          subscriptionPlan: SubscriptionPlan.Basic,
        },
        generateRequest_InvalidEmail: {
          userId: validUUID,
          email: invalidEmail,
          ipAddress: validIp,
          userAgent: validUserAgent,
          secret: validSecret,
          subscriptionPlan: SubscriptionPlan.Basic,
        },
      },
    },
  },
  routes: {
    refreshTokens: refreshRoute,
    me: meRoute,
    generateTokens: generateRoute,
  },
  suites: {
    authController: {
      title: 'Tests For Auth Controller (public routes)',
      refreshTokens: {
        title: 'Refresh-Tokens (POST - ' + refreshRoute + ')',
        cases: {
          validRequest: 'Should return status code 200 if refresh token is valid',
          missingToken: 'Should return status code 400 if refresh token is missing',
          invalidUserId: 'Should return status code 400 if user id is invalid',
          invalidIpAddress: 'Should return status code 400 if ip address is invalid',
        },
      },
      me: {
        title: 'Me (GET - ' + meRoute + ')',
        cases: {
          validRequest: 'Should return status code 200 if user is authenticated',
        },
      },
    },
    internalAuthController: {
      title: 'Tests For Internal Auth Controller (private routes)',
      generateTokens: {
        title: 'Generate-Tokens (POST - ' + generateRoute + ')',
        cases: {
          validRequest: 'Should return status code 200 if user is authenticated',
          missingUserId: 'Should return status code 400 if user id is missing',
          missingSecret: 'Should return status code 400 if secret is missing',
          invalidEmail: 'Should return status code 400 if email is invalid',
        },
      },
    },
  },
};
