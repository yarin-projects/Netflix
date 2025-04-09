import crypto from 'crypto';
import { IUserPayload } from '../interfaces/user-payload.interface';
import 'dotenv/config';

const aesKey = Buffer.from(process.env.AES_KEY!, 'hex');
const iv = Buffer.from(process.env.AES_IV!, 'hex');

const encrypt = (text: string): string => {
  const cipher = crypto.createCipheriv('aes-256-cbc', aesKey, iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
};

const decrypt = (encrypted: string): string => {
  const decipher = crypto.createDecipheriv('aes-256-cbc', aesKey, iv);
  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
};

export const encryptPayload = (payload: IUserPayload): IUserPayload => {
  return {
    user_id: encrypt(payload.user_id),
    email: encrypt(payload.email),
    subscription_plan: payload.subscription_plan,
  };
};

export const decryptPayload = (payload: IUserPayload): IUserPayload => {
  return {
    user_id: decrypt(payload.user_id),
    email: decrypt(payload.email),
    subscription_plan: payload.subscription_plan,
  };
};
