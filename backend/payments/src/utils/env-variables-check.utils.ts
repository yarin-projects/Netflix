import { logger } from '../configs/logger.config';
import { TOKENS } from './tokens.utils';


const {
  DB_USERNAME,
  DB_PASSWORD,
  DB_NAME,
  DB_HOST,
  INTERNAL_ROUTE_SECRET,
  SUBSCRIPTIONS_INTERNAL_URL,
} = process.env;

export const internalSecret = INTERNAL_ROUTE_SECRET;
export const checkEnviormentVariables = () => {
  if (!DB_NAME || !DB_USERNAME || !DB_PASSWORD || !DB_HOST) {
    logger.error(TOKENS.errors.mySqlVariablesMissing);
    throw new Error(TOKENS.errors.mySqlVariablesMissing);
  }
  if (!INTERNAL_ROUTE_SECRET) {
    logger.error(TOKENS.errors.internalRouteSecretMissing);
    throw new Error(TOKENS.errors.internalRouteSecretMissing);
  }
  if (!SUBSCRIPTIONS_INTERNAL_URL) {
    logger.error(TOKENS.errors.subscriptionsInternalUrlMissing);
    throw new Error(TOKENS.errors.subscriptionsInternalUrlMissing);
  }
};
