import { logger } from '../configs/logger.config';
import { TOKENS } from './tokens.utils';
import 'dotenv/config';

const { DB_USERNAME, DB_PASSWORD, DB_NAME, DB_HOST, INTERNAL_ROUTE_SECRET, AUTH_SERVICE_URL } = process.env;

export const checkEnviormentVariables = () => {
  if (!DB_NAME || !DB_USERNAME || !DB_PASSWORD || !DB_HOST) {
    logger.error(TOKENS.errors.mySqlVariablesMissing);
    throw new Error(TOKENS.errors.mySqlVariablesMissing);
  }
  if (!INTERNAL_ROUTE_SECRET) {
    logger.error(TOKENS.errors.internalRouteSecretMissing);
    throw new Error(TOKENS.errors.internalRouteSecretMissing);
  }
  if (!AUTH_SERVICE_URL) {
    logger.error(TOKENS.errors.authServiceUrlMissing);
    throw new Error(TOKENS.errors.authServiceUrlMissing);
  }
};
