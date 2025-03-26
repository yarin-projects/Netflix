import { errors } from './tokens/errors.tokens';
import { httpStatus } from './tokens/http-status-codes.tokens';
import { injections } from './tokens/injections.tokens';
import { messages } from './tokens/messages.tokens';
import { routes } from './tokens/routes.tokens';
import { sql } from './tokens/sql.tokens';

export const TOKENS = Object.freeze({
  allowedOrigins: [
    'http://localhost:3000',
    'https://localhost:3001',
    'http://localhost:3002',
    'https://localhost:3004',
  ],
  port: 3003,
  token: 'Token',
  sql,
  httpStatus,
  injections,
  routes,
  errors,
  messages,
});
