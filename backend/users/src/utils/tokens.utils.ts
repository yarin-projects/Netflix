import { errors } from './tokens/errors.tokens';
import { httpStatus } from './tokens/http-status-codes.tokens';
import { injections } from './tokens/injections.tokens';
import { messages } from './tokens/messages.tokens';
import { routes } from './tokens/routes.tokens';
import { sql } from './tokens/sql.tokens';
import { validations } from './tokens/validations.tokens';

export const TOKENS = {
  corsOrigin: [
    'http://localhost:3000',
    'http://localhost:3002',
    'http://localhost:3003',
    'http://localhost:3004',
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
  errors,
  messages,
};
