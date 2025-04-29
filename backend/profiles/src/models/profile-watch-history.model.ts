import {
  Table,
  Column,
  DataType,
  Model,
  ForeignKey,
  PrimaryKey,
  BelongsTo,
  Index,
} from 'sequelize-typescript';
import { TOKENS } from '../utils/tokens.utils';
import { Profile } from './profile.model';
import { Media } from './media.model';
import { MediaType } from '../enums/media-type.enum';

@Table({
  tableName: TOKENS.sql.table.profileWatchHistory,
  modelName: TOKENS.sql.model.profileWatchHistory,
  timestamps: true,
})
export class ProfileWatchHistory extends Model {
  @PrimaryKey
  @Column({
    type: DataType.CHAR(36),
    defaultValue: DataType.UUIDV4,
  })
  historyId!: string;

  @Index
  @ForeignKey(() => Profile)
  @Column({
    type: DataType.CHAR(36),
    allowNull: false,
  })
  profileId!: string;

  @Index
  @ForeignKey(() => Media)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  mediaId!: number;

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
