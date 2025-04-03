import { Table, Column, DataType, Model } from 'sequelize-typescript';
import { TOKENS } from '../utils/tokens.utils';

@Table({
  tableName: TOKENS.sql.table.profiles,
  modelName: TOKENS.sql.model.profile,
  timestamps: true,
  underscored: true,
})
export class Profile extends Model {
  @Column({
    type: DataType.CHAR(36),
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
    allowNull: false,
  })
  profile_id!: string;

  @Column({
    type: DataType.CHAR(36),
    allowNull: false,
  })
  user_id!: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  primary_profile!: boolean;

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
  watch_history!: number[];

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  is_adult!: boolean;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  avatar_path!: string;
}
