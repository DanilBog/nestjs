import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductsService } from 'src/products/products.service';
import { CategoryesService } from './categoryes.service';
import { CreateCategoryDTO } from './dto/create-category.dto';

@Controller('categoryes')
export class CategoryesController {
  constructor(
    private categoryesService: CategoryesService,
    private productsService: ProductsService,
  ) {}

  @Get()
  getCategoryes() {
    return this.categoryesService.getCategoryes();
  }

  @Post()
  create(@Body() category: CreateCategoryDTO) {
    return this.categoryesService.createCategory(category);
  }

  @Get(':id')
  getProductsByCategory(@Param('id') id: number) {
    console.log('id', id);
    return this.productsService.getProductsByCategory(id);
  }
}
