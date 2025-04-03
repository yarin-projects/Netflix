import { Table, Column, DataType, Model } from 'sequelize-typescript';
import { PaymentMethod } from '../enums/payment-method.enum';
import { PaymentStatus } from '../enums/payment-status.enum';
import { Currency } from '../enums/currency.enum';
import { SubscriptionPlan } from '../enums/subscription-plan.enum';
import { TOKENS } from '../utils/tokens.utils';

@Table({
  tableName: TOKENS.sql.table.payments,
  modelName: TOKENS.sql.model.payment,
  timestamps: true,
  underscored: true,
})
export class Payment extends Model {
  @Column({
    type: DataType.CHAR(36),
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
    allowNull: false,
  })
  payment_id!: string;

  @Column({
    type: DataType.CHAR(36),
    allowNull: false,
  })
  user_id!: string;

  @Column({
    type: DataType.ENUM(...Object.values(SubscriptionPlan)),
    allowNull: false,
  })
  subscription_plan!: SubscriptionPlan;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  transaction_id!: string;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  amount!: number;

  @Column({
    type: DataType.ENUM(...Object.values(Currency)),
    allowNull: false,
  })
  currency!: Currency;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  payment_date!: Date;

  @Column({
    type: DataType.ENUM(...Object.values(PaymentStatus)),
    allowNull: false,
  })
  status!: PaymentStatus;

  @Column({
    type: DataType.ENUM(...Object.values(PaymentMethod)),
    allowNull: false,
  })
  payment_method!: PaymentMethod;

  @Column({
    type: DataType.JSON,
    allowNull: true,
  })
  billing_info?: object;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  receipt_url?: string;
}
