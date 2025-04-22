import { Table, Column, DataType, Model } from 'sequelize-typescript';
import { TOKENS } from '../utils/tokens.utils';

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
    type: DataType.ARRAY(DataType.INTEGER),
    allowNull: true,
    defaultValue: [],
  })
  favorites!: number[];

  @Column({
    type: DataType.ARRAY(DataType.INTEGER),
    allowNull: true,
    defaultValue: [],
  })
  watchHistory!: number[];

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
}
