import { Table, Column, DataType, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from './user.model';
import { TOKENS } from '../utils/tokens.utils';

@Table({
  tableName: TOKENS.sql.table.refreshToken,
  modelName: TOKENS.sql.model.refreshToken,
  timestamps: true,
  underscored: true,
})
export class RefreshToken extends Model {
  @Column({
    type: DataType.CHAR(36),
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
    allowNull: false,
    unique: true,
  })
  token_id!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  token!: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.CHAR(36),
    allowNull: false,
  })
  user_id!: string;

  @BelongsTo(() => User)
  user!: User;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  ip_address?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  user_agent?: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  used!: boolean;
}
