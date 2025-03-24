import { Table, Column, DataType, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from './user.model';
import { TOKENS } from '../utils/tokens.utils';

@Table({
  tableName: TOKENS.sql.table.payment,
  modelName: TOKENS.sql.model.payment,
  timestamps: true,
  underscored: true,
})
export class Payment extends Model {
  @Column({
    type: DataType.CHAR(36),
    primaryKey: true,
    allowNull: false,
    unique: true,
  })
  payment_id!: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.CHAR(36),
    allowNull: false,
  })
  user_id!: string;

  @BelongsTo(() => User)
  user!: User;
}
