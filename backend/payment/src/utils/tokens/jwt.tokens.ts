const {
  JWT_ACCESS_TOKEN,
  JWT_REFRESH_TOKEN,
  JWT_ACCESS_TOKEN_EXPIRATION,
  JWT_REFRESH_TOKEN_EXPIRATION,
} = process.env;
const accessToken = JWT_ACCESS_TOKEN || 'access-token';
const refreshToken = JWT_REFRESH_TOKEN || 'refresh-token';
const accessTokenExpiry = JWT_ACCESS_TOKEN_EXPIRATION || '3h';
const refreshTokenExpiry = JWT_REFRESH_TOKEN_EXPIRATION || '30d';

export const jwt = {
  accessToken,
  refreshToken,
  accessTokenExpiry,
  refreshTokenExpiry,
};
