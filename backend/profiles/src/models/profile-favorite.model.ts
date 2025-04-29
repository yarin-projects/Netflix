import {
  Table,
  Column,
  DataType,
  Model,
  ForeignKey,
  PrimaryKey,
  BelongsTo,
} from 'sequelize-typescript';
import { TOKENS } from '../utils/tokens.utils';
import { Profile } from './profile.model';
import { Media } from './media.model';
import { MediaType } from '../enums/media-type.enum';

@Table({
  tableName: TOKENS.sql.table.profileFavorite,
  modelName: TOKENS.sql.model.profileFavorite,
  timestamps: true,
})
export class ProfileFavorite extends Model {
  @ForeignKey(() => Profile)
  @PrimaryKey
  @Column({
    type: DataType.CHAR(36),
    allowNull: false,
  })
  profileId!: string;

  @ForeignKey(() => Media)
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

  @BelongsTo(() => Profile)
  profile?: Profile;
  
  @BelongsTo(() => Media)
  media?: Media;
}
