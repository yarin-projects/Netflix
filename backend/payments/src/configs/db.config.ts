import { Dialect } from 'sequelize';
import { DbConfig } from '../interfaces/db-config.interface';
import { MySqlConnection } from './mysql.config';
import { Payment } from '../models/payment.model';

export const dbConnection = async () => {
  const { DB_USERNAME, DB_PASSWORD, DB_NAME, DB_HOST, SQL_DIALECT, NODE_ENV } = process.env;

  const isProduction = NODE_ENV === 'production';

  const dbConfig: DbConfig = {
    name: DB_NAME!,
    user: DB_USERNAME!,
    password: DB_PASSWORD!,
    host: DB_HOST!,
    models: [Payment],
    dialect: (SQL_DIALECT as Dialect) || 'mysql',
    ensureDbExists: !isProduction,
    runSync: !isProduction,
  };

  return await MySqlConnection.getInstance(dbConfig);
};
