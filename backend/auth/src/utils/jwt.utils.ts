import jwt from 'jsonwebtoken';
import { TOKENS } from './tokens.utils';
import { decryptPayload, encryptPayload } from './aes.utils';
import { JwtExpiry } from '../types/jwt-expiry.type';
import { IUserPayload } from '../interfaces/user-payload.interface';
import { JwtTokens } from '../dtos/jwt-tokens.dto';

const accessTokenExpiry: JwtExpiry = TOKENS.jwt.accessTokenExpiry as JwtExpiry;
const refreshTokenExpiry: JwtExpiry = TOKENS.jwt.refreshTokenExpiry as JwtExpiry;
const jwtKey = process.env.JWT_KEY!;

const generateAccessToken = (payload: IUserPayload) => {
  const encryptedPayload = encryptPayload(payload);
  return jwt.sign(encryptedPayload, jwtKey, { expiresIn: accessTokenExpiry });
};

const generateRefreshToken = (payload: IUserPayload) => {
  const encryptedPayload = encryptPayload(payload);
  return jwt.sign(encryptedPayload, jwtKey, { expiresIn: refreshTokenExpiry });
};

export const generateJwtTokens = (payload: IUserPayload): JwtTokens => {
  const accessToken = generateAccessToken(payload);
  const refreshToken = generateRefreshToken(payload);

  return { accessToken, refreshToken };
};

export const verifyToken = (token: string) => {
  const decoded = jwt.verify(token, jwtKey) as IUserPayload;

  return decryptPayload(decoded);
};

const getJwtExpiryDate = (tokenExpiry: JwtExpiry) => {
  const timeValue = Number(tokenExpiry.slice(0, -1));
  const unit = tokenExpiry.slice(-1);

  const multipliers: { [key: string]: number } = {
    s: 1000,
    m: 60 * 1000,
    h: 60 * 60 * 1000,
    d: 24 * 60 * 60 * 1000,
  };

  return new Date(Date.now() + timeValue * (multipliers[unit] || 0));
};

export const accessTokenExpiryDate = getJwtExpiryDate(accessTokenExpiry);
export const refreshTokenExpiryDate = getJwtExpiryDate(refreshTokenExpiry);
