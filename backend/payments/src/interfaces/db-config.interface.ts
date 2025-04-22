import { Dialect } from 'sequelize';
import { ModelCtor } from 'sequelize-typescript';

export interface DbConfig {
  name: string;
  user: string;
  password: string;
  host: string;
  models: ModelCtor[];
  dialect?: Dialect;
  runSync?: boolean;
  ensureDbExists?: boolean;
}
