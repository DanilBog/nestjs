import { Model, Column, DataType, Table } from 'sequelize-typescript';

interface ProductCreationAttr {
  title: string;
  description: string;
  vendor_code: string;
  image: string;
  category_id: number;
  price: number;
  number: number;
}

@Table({ tableName: 'Products', timestamps: false })
export class Product extends Model<Product, ProductCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  title: string;

  @Column({ type: DataType.STRING, allowNull: false })
  description: string;

  @Column({ type: DataType.STRING, allowNull: true })
  vendor_code: string;

  @Column({ type: DataType.STRING, allowNull: true })
  image: string;

  @Column({ type: DataType.INTEGER, allowNull: true })
  category_id: number;

  @Column({ type: DataType.INTEGER, allowNull: true })
  price: number;

  @Column({ type: DataType.INTEGER, allowNull: true })
  number: number;
}
