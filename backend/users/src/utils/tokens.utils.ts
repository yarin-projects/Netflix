import { errors } from './tokens/errors.tokens';
import { httpStatus } from './tokens/http-status-codes.tokens';
import { injections } from './tokens/injections.tokens';
import { messages } from './tokens/messages.tokens';
import { routes } from './tokens/routes.tokens';
import { sql } from './tokens/sql.tokens';
import { tests } from './tokens/tests.tokens';
import { validations } from './tokens/validations.tokens';

export const TOKENS = Object.freeze({
  allowedOrigins: [
    'http://localhost:3000',
    'http://localhost:3002',
    'https://localhost:3003',
    'https://localhost:3004',
  ],
  port: 3001,
  bcryptRounds: 10,
  jwtExpiry: '3h',
  token: 'Token',
  sql,
  httpStatus,
  injections,
  routes,
  validations,
  tests,
  errors,
  messages,
});
