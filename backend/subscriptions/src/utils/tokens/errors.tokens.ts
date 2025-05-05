const internalServerError = 'Internal server error';
export const errors = {
  mySqlConnectionFailed: 'MySql connection failed: ',
  mySqlVariablesMissing: 'DB_USERNAME, DB_PASSWORD, DB_NAME, DB_HOST are required',
  internalServerError,
  subscriptionNotFound: 'Subscription not found for user: ',
  internalRouteSecretMissing: 'INTERNAL_ROUTE_SECRET is required',
};
