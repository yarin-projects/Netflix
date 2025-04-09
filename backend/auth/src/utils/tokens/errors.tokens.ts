const internalServerError = 'Internal server error';
export const errors = {
  mySqlConnectionFailed: 'MySql connection failed: ',
  mySqlVariablesMissing: 'DB_USERNAME, DB_PASSWORD, DB_NAME, DB_HOST are required',
  aesVariablesMissing: 'AES_KEY and AES_IV are required',
  jwtVariablesMissing:
    'JWT_KEY, JWT_ACCESS_TOKEN, JWT_REFRESH_TOKEN, JWT_ACCESS_TOKEN_EXPIRATION, JWT_REFRESH_TOKEN_EXPIRATION are required',
  internalRouteSecretMissing: 'INTERNAL_ROUTE_SECRET is not defined',
  internalRouteSecretInvalid: 'Provided INTERNAL_ROUTE_SECRET is invalid',
  internalServerError,
  invalidRefreshToken: 'Invalid refresh token',
  refreshTokenUsed: 'Refresh token was already used for user: ',
  invalidTokenMetaData: 'Invalid token meta data for user: ',
};
