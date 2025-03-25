import jwt from 'jsonwebtoken';
import 'dotenv/config';

const jwtKey = process.env.JWT_KEY!;

export const verifyToken = (token: string) => {
  return jwt.verify(token, jwtKey);
};



