import { Table, Column, DataType, Model, BelongsToMany, HasMany } from 'sequelize-typescript';
import { TOKENS } from '../utils/tokens.utils';
import { ProfileFavorite } from './profile-favorite.model';
import { ProfileWatchHistory } from './profile-watch-history.model';
import { Media } from './media.model';

@Table({
  tableName: TOKENS.sql.table.profiles,
  modelName: TOKENS.sql.model.profile,
  timestamps: true,
})
export class Profile extends Model {
  @Column({
    type: DataType.CHAR(36),
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
    allowNull: false,
  })
  profileId!: string;

  @Column({
    type: DataType.CHAR(36),
    allowNull: false,
  })
  userId!: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  primaryProfile!: boolean;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  isAdult!: boolean;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  avatarPath!: string;

  @BelongsToMany(() => Media, () => ProfileFavorite)
  favoriteMedia?: Media[];

  @BelongsToMany(() => Media, () => ProfileWatchHistory)
  watchedMedia?: (Media & { ProfileWatchHistory: ProfileWatchHistory })[];

  @HasMany(() => ProfileFavorite)
  favoriteEntries?: ProfileFavorite[];

  @HasMany(() => ProfileWatchHistory)
  historyEntries?: ProfileWatchHistory[];
}
