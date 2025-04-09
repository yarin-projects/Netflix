import { Table, Column, DataType, Model } from 'sequelize-typescript';
import { TOKENS } from '../utils/tokens.utils';
import { SubscriptionPlan } from '../enums/subscription-plan.enum';

@Table({
  tableName: TOKENS.sql.table.subscriptions,
  modelName: TOKENS.sql.model.subscription,
  timestamps: true,
})
export class Subscription extends Model {
  @Column({
    type: DataType.CHAR(36),
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
    allowNull: false,
    unique: true,
  })
  subscriptionId!: string;

  @Column({
    type: DataType.CHAR(36),
    allowNull: false,
  })
  userId!: string;

  @Column({
    type: DataType.ENUM(...Object.values(SubscriptionPlan)),
    allowNull: false,
  })
  plan!: SubscriptionPlan;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  startDate!: Date;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  endDate!: Date;

  get active(): boolean {
    if (!this.endDate) return false;
    return new Date() < new Date(this.endDate);
  }
}
