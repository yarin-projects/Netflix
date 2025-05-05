const internalServerError = 'Internal server error';
export const errors = {
  mySqlConnectionFailed: 'MySql connection failed: ',
  mySqlVariablesMissing: 'DB_USERNAME, DB_PASSWORD, DB_NAME, DB_HOST are required',
  internalServerError,
  invalidSubscription: 'Invalid Subscription',
  orderNotFound: 'Order not found',
  invalidInternalSecret: 'Provided INTERNAL_ROUTE_SECRET is invalid',
};
