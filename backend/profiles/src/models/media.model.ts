import { BelongsToMany, Column, DataType, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { TOKENS } from '../utils/tokens.utils';
import { MediaType } from '../enums/media-type.enum';
import { Profile } from './profile.model';
import { ProfileFavorite } from './profile-favorite.model';
import { ProfileWatchHistory } from './profile-watch-history.model';

@Table({
  tableName: TOKENS.sql.table.media,
  modelName: TOKENS.sql.model.media,
  timestamps: true,
})
export class Media extends Model {
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  mediaId!: number;

  @PrimaryKey
  @Column({
    type: DataType.ENUM(...Object.values(MediaType)),
    allowNull: false,
  })
  mediaType!: MediaType;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  posterPath?: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  releaseYear?: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: true,
  })
  voteAverage?: number;

  @BelongsToMany(() => Profile, () => ProfileFavorite)
  favoritedByProfiles?: Profile[];

  @BelongsToMany(() => Profile, () => ProfileWatchHistory)
  watchedByProfiles?: Profile[];
}
