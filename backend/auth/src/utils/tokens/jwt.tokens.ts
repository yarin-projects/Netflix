const {
  JWT_ACCESS_TOKEN,
  JWT_REFRESH_TOKEN,
  JWT_ACCESS_TOKEN_EXPIRATION,
  JWT_REFRESH_TOKEN_EXPIRATION,
} = process.env;

export const jwt = {
  accessToken: JWT_ACCESS_TOKEN!,
  refreshToken: JWT_REFRESH_TOKEN!,
  accessTokenExpiry: JWT_ACCESS_TOKEN_EXPIRATION!,
  refreshTokenExpiry: JWT_REFRESH_TOKEN_EXPIRATION!,
};
