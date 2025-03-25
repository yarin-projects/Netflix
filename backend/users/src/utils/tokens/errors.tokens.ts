const internalServerError = 'Internal server error';
export const errors = {
  jwtKeyMissing: 'JWT_KEY is not defined',
  mySqlConnectionFailed: 'MySql connection failed: ',
  mySqlVariablesMissing: 'DB_USERNAME, DB_PASSWORD, DB_NAME, DB_HOST are required',
  internalServerError,
  userAlreadyExists: 'User already exists',
  userCouldNotBeCreated: 'User could not be created',
  userNotFound: `${internalServerError}: User with email not found: `,
  invalidPassword: `${internalServerError}: Invalid password for user with email: `,
  invalidCredentials: 'Invalid credentials',
};
