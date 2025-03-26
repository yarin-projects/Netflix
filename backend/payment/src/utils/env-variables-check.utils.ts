import { TOKENS } from './tokens.utils';

const { JWT_KEY, AES_KEY, AES_IV, DB_USERNAME, DB_PASSWORD, DB_NAME, DB_HOST } = process.env;

export const checkEnviormentVariables = () => {
  if (!JWT_KEY) {
    throw new Error(TOKENS.errors.jwtKeyMissing);
  }
  if (!AES_KEY || !AES_IV) {
    throw new Error(TOKENS.errors.aesVariablesMissing);
  }
  if (!DB_NAME || !DB_USERNAME || !DB_PASSWORD || !DB_HOST) {
    throw new Error(TOKENS.errors.mySqlVariablesMissing);
  }
};
