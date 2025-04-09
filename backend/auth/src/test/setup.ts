import { Sequelize } from 'sequelize-typescript';
import { Transaction } from 'sequelize';
import { RefreshToken } from '../models/refresh-token.model';

export const sequelizeTestInstance = new Sequelize({
  dialect: 'sqlite',
  storage: ':memory:',
  logging: false,
  models: [RefreshToken],
});

beforeAll(async () => {
  await sequelizeTestInstance.authenticate();
  await sequelizeTestInstance.sync({ force: true });
});

let transaction: Transaction;

beforeEach(async () => {
  transaction = await sequelizeTestInstance.transaction();
});

afterEach(async () => {
  await transaction.rollback();
});

afterAll(async () => {
  await sequelizeTestInstance.close();
});
