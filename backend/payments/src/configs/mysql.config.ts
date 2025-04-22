import { Sequelize } from 'sequelize-typescript';
import { TOKENS } from '../utils/tokens.utils';
import { logger } from './logger.config';
import { DbConfig } from '../interfaces/db-config.interface';
import mysql from 'mysql2/promise';

export class MySqlConnection {
  private static instance: Sequelize | null = null;
  private constructor() {}
  public static async getInstance(dbConfig: DbConfig): Promise<Sequelize> {
    if (!MySqlConnection.instance) {
      MySqlConnection.instance = await this.connect(dbConfig);
    }
    return Promise.resolve(MySqlConnection.instance);
  }
  private static connect = async (dbConfig: DbConfig) => {
    const { name, user, password, host, dialect, ensureDbExists, runSync, models } = dbConfig;
    if (ensureDbExists) {
      await this.ensureDatabaseExists(dbConfig);
    }
    const sequelize = new Sequelize({
      database: name,
      username: user,
      password,
      host,
      dialect: dialect,
      logging: false,
      models: models,
    });
    try {
      await sequelize.authenticate();
      logger.info(TOKENS.messages.mySqlConncetionSuccess);
      console.log(TOKENS.messages.mySqlConncetionSuccess);
      await sequelize.sync({ alter: runSync });
      return sequelize;
    } catch (error) {
      logger.error(TOKENS.errors.mySqlConnectionFailed + error);
      throw new Error(TOKENS.errors.mySqlConnectionFailed + error);
    }
  };
  private static ensureDatabaseExists = async (dbConfig: DbConfig) => {
    const { host, user, password, name: dbName } = dbConfig;
    const connection = await mysql.createConnection({ host, user, password });
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${dbName}\`;`);
    await connection.end();
  };
}
