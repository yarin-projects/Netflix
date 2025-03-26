import { MySqlConnection } from './mysql.config';

export const dbConnection = async () => {
  const { DB_USERNAME, DB_PASSWORD, DB_NAME, DB_HOST } = process.env;

  return await MySqlConnection.getInstance(DB_NAME!, DB_USERNAME!, DB_PASSWORD!, DB_HOST!);
};
