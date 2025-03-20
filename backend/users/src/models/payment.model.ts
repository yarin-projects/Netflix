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
    type: DataType.UUIDV4,
    primaryKey: true,
    allowNull: false,
    unique: true,
  })
  payment_id!: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  user_id!: string;

  @BelongsTo(() => User)
  user!: User;
}
