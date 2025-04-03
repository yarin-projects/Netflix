import { allowedOrigins } from './tokens/allowed-origins.tokens';
import { errors } from './tokens/errors.tokens';
import { httpStatus } from './tokens/http-status-codes.tokens';
import { injections } from './tokens/injections.tokens';
import { logger } from './tokens/logger.tokens';
import { messages } from './tokens/messages.tokens';
import { routes } from './tokens/routes.tokens';
import { sql } from './tokens/sql.tokens';
import { tests } from './tokens/tests.tokens';

const port = Number(process.env.PORT) || 3003;

export const TOKENS = Object.freeze({
  emptyString: '',
  port,
  allowedOrigins,
  sql,
  logger,
  httpStatus,
  injections,
  routes,
  tests,
  errors,
  messages,
});
