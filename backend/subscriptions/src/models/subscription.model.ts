import { Table, Column, DataType, Model } from 'sequelize-typescript';
import { TOKENS } from '../utils/tokens.utils';
import { SubscriptionPlan } from '../enums/subscription-plan.enum';

@Table({
  tableName: TOKENS.sql.table.subscriptions,
  modelName: TOKENS.sql.model.subscription,
  timestamps: true,
  underscored: true,
})
export class Subscription extends Model {
  @Column({
    type: DataType.CHAR(36),
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
    allowNull: false,
    unique: true,
  })
  subscription_id!: string;

  @Column({
    type: DataType.CHAR(36),
    allowNull: false,
  })
  user_id!: string;

  @Column({
    type: DataType.ENUM(...Object.values(SubscriptionPlan)),
    allowNull: false,
  })
  plan!: SubscriptionPlan;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  start_date!: Date;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  end_date!: Date;

  get active(): boolean {
    if (!this.end_date) return false;
    return new Date() < new Date(this.end_date);
  }
}
