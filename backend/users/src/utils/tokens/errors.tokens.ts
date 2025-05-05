const internalServerError = 'Internal server error';
export const errors = {
  mySqlConnectionFailed: 'MySql connection failed: ',
  mySqlVariablesMissing: 'DB_USERNAME, DB_PASSWORD, DB_NAME, DB_HOST are required',
  internalServerError,
  userAlreadyExists: 'User already exists',
  userCouldNotBeCreated: 'User could not be created',
  userNotFound: `${internalServerError}: User with email not found: `,
  invalidPassword: `${internalServerError}: Invalid password for user with email: `,
  invalidCredentials: 'Invalid credentials',
  invalidInternalSecret: 'Provided INTERNAL_ROUTE_SECRET is invalid',
  internalRouteSecretMissing: 'INTERNAL_ROUTE_SECRET is required',
  authServiceUrlMissing: 'AUTH_SERVICE_URL is required',
};
