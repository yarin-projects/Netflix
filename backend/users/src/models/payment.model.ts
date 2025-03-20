import {
    Table,
    Column,
    DataType,
    Model,
    ForeignKey,
    BelongsTo,
  } from 'sequelize-typescript';
  import { User } from './user.model';
  
  @Table({
    tableName: 'payments',
    modelName: 'Payment',
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
  