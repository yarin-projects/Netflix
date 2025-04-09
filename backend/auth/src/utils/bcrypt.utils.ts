import bcrypt from 'bcrypt';
import { TOKENS } from './tokens.utils';

export const hashToken = async (token: string): Promise<string> => {
  return await bcrypt.hash(token, TOKENS.bcryptRounds);
};

export const compareToken = async (password: string, hashedtoken: string): Promise<boolean> => {
  return await bcrypt.compare(password, hashedtoken);
};
