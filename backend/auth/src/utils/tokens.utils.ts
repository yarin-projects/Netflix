import { allowedOrigins } from './tokens/allowed-origins.tokens';
import { errors } from './tokens/errors.tokens';
import { httpStatus } from './tokens/http-status-codes.tokens';
import { httpsOptions } from './tokens/https-options.tokens';
import { injections } from './tokens/injections.tokens';
import { jwt } from './tokens/jwt.tokens';
import { logger } from './tokens/logger.tokens';
import { messages } from './tokens/messages.tokens';
import { routes } from './tokens/routes.tokens';
import { sql } from './tokens/sql.tokens';
import { tests } from './tokens/tests.tokens';
import { validations } from './tokens/validations.tokens';

const port = Number(process.env.PORT) || 3001;

export const TOKENS = Object.freeze({
  emptyString: '',
  bcryptRounds: 10,
  port,
  allowedOrigins,
  validations,
  sql,
  logger,
  jwt,
  httpStatus,
  httpsOptions,
  injections,
  routes,
  tests,
  errors,
  messages,
});
