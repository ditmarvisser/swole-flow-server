import { Table, Column, DataType, Model } from 'sequelize-typescript';

@Table({
  timestamps: true,
  paranoid: true
})
export class User extends Model<User> {
  @Column({ primaryKey: true, type: DataType.NUMBER.UNSIGNED })
  public id!: number;

  @Column({ type: DataType.STRING })
  public email!: string;

  @Column({ type: DataType.STRING })
  public password!: string;
};
