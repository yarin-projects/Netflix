import { errors } from './tokens/errors.tokens';
import { messages } from './tokens/messages.tokens';
import { sql } from './tokens/sql.tokens';

export const TOKENS = {
  corsOrigin: [
    'http://localhost:3000',
    'http://localhost:3002',
    'http://localhost:3003',
    'http://localhost:3004',
  ],
  port: 3001,
  sql,
  errors,
  messages,
};
