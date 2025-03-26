import { ISubscription } from './subscription.interface';

export interface IUser {
  user_id: string;
  email: string;
  password: string;
  subscription?: ISubscription;
}
