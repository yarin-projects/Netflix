import { Sequelize } from 'sequelize-typescript';
import { User } from '../models/user.model';
import { Transaction } from 'sequelize';

export const sequelizeTestInstance = new Sequelize({
  dialect: 'sqlite',
  storage: ':memory:',
  logging: false,
  models: [User],
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
