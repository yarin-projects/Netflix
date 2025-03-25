import { errors } from './tokens/errors.tokens';
import { httpStatus } from './tokens/http-status-codes.tokens';
import { injections } from './tokens/injections.tokens';
import { messages } from './tokens/messages.tokens';
import { routes } from './tokens/routes.tokens';
import { tests } from './tokens/tests.token';

export const TOKENS = {
  allowedOrigins: [
    'http://localhost:3000',
    'http://localhost:3002',
    'http://localhost:3003',
    'http://localhost:3004',
  ],
  port: 3001,
  token: 'Token',
  httpStatus,
  injections,
  routes,
  tests,
  errors,
  messages,
};
