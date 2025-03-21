import { IBaseUser } from './base-user.interface';
import { ISubscription } from './subscription.interface';

export interface IUser extends IBaseUser {
  user_id: string;
  subscription?: ISubscription;
}
