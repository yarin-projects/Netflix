import { Response } from 'express';
import { TOKENS } from './tokens.utils';
import { getJwtExpiryDate } from './jwt.utils';
import { JwtExpiry } from '../types/jwt-expiry.type';
import { IJwtTokens } from '../interfaces/jwt-tokens.interface';

const accessTokenExpiryDate = getJwtExpiryDate(TOKENS.jwt.accessTokenExpiry as JwtExpiry);
const refreshTokenExpiryDate = getJwtExpiryDate(TOKENS.jwt.refreshTokenExpiry as JwtExpiry);

const setCookie = (res: Response, tokenName: string, token: string, expires: Date) => {
  res.cookie(tokenName, token, { httpOnly: true, expires: expires });
};

export const clearCookies = (res: Response) => {
  res.clearCookie(TOKENS.jwt.accessToken);
  res.clearCookie(TOKENS.jwt.refreshToken);
};

export const setJwtCookies = (res: Response, jwtTokens: IJwtTokens) => {
  setCookie(res, TOKENS.jwt.accessToken, jwtTokens.accessToken, accessTokenExpiryDate);
  setCookie(res, TOKENS.jwt.refreshToken, jwtTokens.refreshToken, refreshTokenExpiryDate);
};
