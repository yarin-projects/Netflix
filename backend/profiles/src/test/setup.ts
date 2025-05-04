import { Sequelize } from 'sequelize-typescript';
import { Transaction } from 'sequelize';
import { Profile } from '../models/profile.model';
import { Media } from '../models/media.model';
import { ProfileFavorite } from '../models/profile-favorite.model';
import { ProfileWatchHistory } from '../models/profile-watch-history.model';

export const sequelizeTestInstance = new Sequelize({
  dialect: 'sqlite',
  storage: ':memory:',
  logging: false,
  models: [Profile, Media, ProfileFavorite, ProfileWatchHistory],
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
