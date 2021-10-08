import { Model, Column, DataType, Table } from 'sequelize-typescript';

interface CategoryCreationAttr {
  title: string;
  parent_id: number;
}

@Table({ tableName: 'Categoryes', timestamps: false })
export class Category extends Model<Category, CategoryCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  title: string;

  @Column({ type: DataType.INTEGER, allowNull: true })
  parent_id: number;
}
