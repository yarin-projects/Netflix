import { Table, Column, DataType, Model, HasMany } from 'sequelize-typescript';
import { Profile } from './profile.model';
import { Payment } from './payment.model';
import { TOKENS } from '../utils/tokens.utils';
import { SubscriptionPlan } from '../enums/subscription-plan.enum';
import { RefreshToken } from './refresh-token.model';

@Table({
  tableName: TOKENS.sql.table.user,
  modelName: TOKENS.sql.model.user,
  timestamps: true,
  underscored: true,
})
export class User extends Model {
  @Column({
    type: DataType.CHAR(36),
    defaultValue: DataType.UUIDV4,
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
    type: DataType.ENUM(...Object.values(SubscriptionPlan)),
    allowNull: true,
  })
  subscription_plan?: string;

  get subscription_active(): boolean {
    if (!this.subscription_end_date) return false;
    return new Date() < new Date(this.subscription_end_date);
  }

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

  @HasMany(() => RefreshToken)
  refresh_tokens!: RefreshToken[];
}
