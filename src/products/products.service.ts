import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateProductDTO } from './dto/create-product.dto';
import { Product } from './product.model';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product) private productRepository: typeof Product,
  ) {}

  async getProducts(): Promise<Product[]> {
    const products = await this.productRepository.findAll();
    return products;
  }

  getProduct(id: string) {
    return id;
  }

  async getProductsByCategory(id: number) {
    const products = await this.productRepository.findAll({
      where: { category_id: id },
    });
    return products;
  }

  async createProduct(productDto: CreateProductDTO): Promise<any> {
    const product = await this.productRepository.create(productDto);
    return product;
  }

  async deleteProduct(id: number) {
    return await this.productRepository.destroy({ where: { id } });
  }
}
