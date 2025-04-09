import { Table, Column, DataType, Model } from 'sequelize-typescript';
import { TOKENS } from '../utils/tokens.utils';

@Table({
  tableName: TOKENS.sql.table.refreshTokens,
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

  @Column({
    type: DataType.CHAR(36),
    allowNull: false,
  })
  user_id!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  ip_address?: string;

  @Column({
    type: DataType.STRING(TOKENS.validations.userAgent.max.value),
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
