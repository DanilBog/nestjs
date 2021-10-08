import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Category } from './category.model';
import { CreateCategoryDTO } from './dto/create-category.dto';

@Injectable()
export class CategoryesService {
  constructor(
    @InjectModel(Category) private categoryRepository: typeof Category,
  ) {}

  async getCategoryes() {
    const categoryes = await this.categoryRepository.findAll();
    return categoryes;
  }

  async createCategory(categoryDto: CreateCategoryDTO) {
    const category = await this.categoryRepository.create(categoryDto);
    return category;
  }
}
