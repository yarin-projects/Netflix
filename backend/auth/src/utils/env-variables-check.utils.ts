import { logger } from '../configs/logger.config';
import { TOKENS } from './tokens.utils';

const {
  DB_USERNAME,
  DB_PASSWORD,
  DB_NAME,
  DB_HOST,
  AES_KEY,
  AES_IV,
  JWT_KEY,
  JWT_ACCESS_TOKEN,
  JWT_REFRESH_TOKEN,
  JWT_ACCESS_TOKEN_EXPIRATION,
  JWT_REFRESH_TOKEN_EXPIRATION,
  INTERNAL_ROUTE_SECRET,
} = process.env;

export const checkEnviormentVariables = () => {
  if (
    !JWT_KEY ||
    !JWT_ACCESS_TOKEN ||
    !JWT_REFRESH_TOKEN ||
    !JWT_ACCESS_TOKEN_EXPIRATION ||
    !JWT_REFRESH_TOKEN_EXPIRATION
  ) {
    logger.error(TOKENS.errors.jwtVariablesMissing);
    throw new Error(TOKENS.errors.jwtVariablesMissing);
  }
  if (!AES_KEY || !AES_IV) {
    logger.error(TOKENS.errors.aesVariablesMissing);
    throw new Error(TOKENS.errors.aesVariablesMissing);
  }
  if (!DB_NAME || !DB_USERNAME || !DB_PASSWORD || !DB_HOST) {
    logger.error(TOKENS.errors.mySqlVariablesMissing);
    throw new Error(TOKENS.errors.mySqlVariablesMissing);
  }
  if (!INTERNAL_ROUTE_SECRET) {
    logger.error(TOKENS.errors.internalRouteSecretMissing);
    throw new Error(TOKENS.errors.internalRouteSecretMissing);
  }
};
