import { Table, Column, DataType, Model, HasMany } from 'sequelize-typescript';
import { Profile } from './profile.model';
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
    type: DataType.UUID,
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

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  subscription_plan?: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: true,
  })
  subscription_active?: boolean;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  subscription_start_date?: Date;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  subscription_end_date?: Date;

  @HasMany(() => Profile)
  profiles!: Profile[];

  @HasMany(() => Payment)
  payments!: Payment[];
}
