import { errors } from './tokens/errors.tokens';
import { httpStatus } from './tokens/http-status-codes.tokens';
import { injections } from './tokens/injections.tokens';
import { messages } from './tokens/messages.tokens';
import { routes } from './tokens/routes.tokens';
import {tests} from './tokens/tests.tokens'

export const TOKENS = {
  allowedOrigins: [
    'http://localhost:3000',
    'https://localhost:3001',
    'http://localhost:3002',
    'https://localhost:3003',
  ],
  port: 3004,
  token: 'Token',
  httpStatus,
  injections,
  routes,
  tests,
  errors,
  messages,
};
