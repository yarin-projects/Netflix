const internalServerError = 'Internal server error';
export const errors = {
  jwtKeyMissing: 'JWT_KEY is not defined',
  mySqlConnectionFailed: 'MySql connection failed: ',
  mySqlVariablesMissing: 'DB_USERNAME, DB_PASSWORD, DB_NAME, DB_HOST are required',
  aesVariablesMissing: 'AES_KEY and AES_IV are required',
  internalServerError,
};
