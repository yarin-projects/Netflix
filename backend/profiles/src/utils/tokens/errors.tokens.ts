const internalServerError = 'Internal server error';
export const errors = {
  mySqlConnectionFailed: 'MySql connection failed: ',
  mySqlVariablesMissing: 'DB_USERNAME, DB_PASSWORD, DB_NAME, DB_HOST are required',
  internalServerError,
  profileNotFound: 'Profile not found for user: ',
  invalidProfile: 'Forbidden: Invalid Profile',
  internalRouteSecretMissing: 'INTERNAL_ROUTE_SECRET is not defined',
  internalRouteSecretInvalid: 'Provided INTERNAL_ROUTE_SECRET is invalid',
  favoriteNotFound: 'Favorite not found',
};
