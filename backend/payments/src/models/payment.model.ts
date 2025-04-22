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
})
export class Payment extends Model {
  @Column({
    type: DataType.CHAR(36),
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
    allowNull: false,
  })
  paymentId!: string;

  @Column({
    type: DataType.CHAR(36),
    allowNull: false,
  })
  userId!: string;

  @Column({
    type: DataType.ENUM(...Object.values(SubscriptionPlan)),
    allowNull: false,
  })
  subscriptionPlan!: SubscriptionPlan;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  transactionId!: string;

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
  paymentDate!: Date;

  @Column({
    type: DataType.ENUM(...Object.values(PaymentStatus)),
    allowNull: false,
  })
  status!: PaymentStatus;

  @Column({
    type: DataType.ENUM(...Object.values(PaymentMethod)),
    allowNull: false,
  })
  paymentMethod!: PaymentMethod;

  @Column({
    type: DataType.JSON,
    allowNull: true,
  })
  billingInfo?: object;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  receiptUrl?: string;
}
