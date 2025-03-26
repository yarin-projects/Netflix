import { Table, Column, DataType, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { SubscriptionPlan } from '../enums/subscription-plan.enum';
import { Currency } from '../enums/currency.enum';
import { PaymentMethod } from '../enums/payment-method.enum';
import { User } from './user.model';

@Table({
  tableName: 'payments',
  modelName: 'Payment',
  timestamps: true,
  underscored: true,
})
export class Payment extends Model {
  @Column({
    type: DataType.CHAR(36),
    defaultValue: DataType.UUIDV4,
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

  @Column({
    type: DataType.ENUM(...Object.values(SubscriptionPlan)),
    allowNull: true,
  })
  subscription_plan?: SubscriptionPlan;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  transaction_id?: string;

  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: true,
  })
  amount?: number;

  @Column({
    type: DataType.ENUM(...Object.values(Currency)),
    allowNull: true,
    defaultValue: Currency.USD,
  })
  currency?: Currency;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  payment_date?: Date;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  status?: string;

  @Column({
    type: DataType.ENUM(...Object.values(PaymentMethod)),
    allowNull: true,
  })
  payment_method?: PaymentMethod;

  @Column({
    type: DataType.JSON,
    allowNull: true,
  })
  billing_info?: any;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  receipt_url?: string;
}
