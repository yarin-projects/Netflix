import { Table, Column, DataType, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from './user.model';
import { TOKENS } from '../utils/tokens.utils';

@Table({
  tableName: TOKENS.sql.table.profile,
  modelName: TOKENS.sql.model.profile,
  timestamps: true,
  underscored: true,
})
export class Profile extends Model {
  @Column({
    type: DataType.CHAR(36),
    primaryKey: true,
    allowNull: false,
    unique: true,
  })
  profile_id!: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.CHAR(36),
    allowNull: false,
  })
  user_id!: string;

  @BelongsTo(() => User)
  user!: User;
}
