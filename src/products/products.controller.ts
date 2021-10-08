import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateProductDTO } from './dto/create-product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getProducts() {
    return this.productsService.getProducts();
  }

  @Post()
  create(@Body() productDto: CreateProductDTO) {
    console.log('productDto', productDto);
    return this.productsService.createProduct(productDto);
  }

  @Delete()
  delete(@Body('id') id: number) {
    console.log('id', id);
    return this.productsService.deleteProduct(id);
  }

  @Get(':id')
  getProduct(@Param('id') id: string) {
    return this.productsService.getProduct(id);
  }
}
