import { Table, Column, DataType, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from './user.model';

@Table({
  tableName: 'profiles',
  modelName: 'Profile',
  timestamps: true,
  underscored: true,
})
export class Profile extends Model {
  @Column({
    type: DataType.UUIDV4,
    primaryKey: true,
    allowNull: false,
    unique: true,
  })
  profile_id!: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  user_id!: string;

  @BelongsTo(() => User)
  user!: User;
}
