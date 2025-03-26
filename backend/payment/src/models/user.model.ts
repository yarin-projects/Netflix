import { Table, Column, DataType, Model, HasMany } from 'sequelize-typescript';
import { Payment } from './payment.model';
import { TOKENS } from '../utils/tokens.utils';

@Table({
  tableName: TOKENS.sql.table.user,
  modelName: TOKENS.sql.model.user,
  timestamps: true,
  underscored: true,
})
export class User extends Model {
  @Column({
    type: DataType.CHAR(36),
    primaryKey: true,
    allowNull: false,
    unique: true,
  })
  user_id!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email!: string;

  @HasMany(() => Payment)
  payments!: Payment[];
}
