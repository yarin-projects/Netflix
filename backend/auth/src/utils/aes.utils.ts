import crypto from 'crypto';
import { IUserPayload } from '../interfaces/user-payload.interface';
import 'dotenv/config';

const aesKey = Buffer.from(process.env.AES_KEY!, 'hex');
const iv = Buffer.from(process.env.AES_IV!, 'hex');

export const encrypt = (text: string): string => {
  const cipher = crypto.createCipheriv('aes-256-cbc', aesKey, iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
};

export const decrypt = (encrypted: string): string => {
  const decipher = crypto.createDecipheriv('aes-256-cbc', aesKey, iv);
  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
};

export const encryptPayload = (payload: IUserPayload): IUserPayload => {
  const { userId, email, subscriptionPlan } = payload;
  return {
    userId: encrypt(userId),
    email: encrypt(email),
    subscriptionPlan,
  };
};

export const decryptPayload = (payload: IUserPayload): IUserPayload => {
  const { userId, email, subscriptionPlan } = payload;
  return {
    userId: decrypt(userId),
    email: decrypt(email),
    subscriptionPlan,
  };
};
