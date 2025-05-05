import { Sequelize } from 'sequelize-typescript';
import { Transaction } from 'sequelize';
import { Payment } from '../models/payment.model';

export const sequelizeTestInstance = new Sequelize({
  dialect: 'sqlite',
  storage: ':memory:',
  logging: false,
  models: [Payment],
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
