import { Sequelize } from 'sequelize-typescript';
import { User } from '../models/user.model';
import { Profile } from '../models/profile.model';
import { Payment } from '../models/payment.model';
import { Transaction } from 'sequelize';

export const sequelizeTestInstance = new Sequelize({
  dialect: 'sqlite',
  storage: ':memory:',
  logging: false,
  models: [User, Profile, Payment],
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
