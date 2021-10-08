import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductsModule } from 'src/products/products.module';
import { Category } from './category.model';
import { CategoryesController } from './categoryes.controller';
import { CategoryesService } from './categoryes.service';

@Module({
  controllers: [CategoryesController],
  providers: [CategoryesService],
  imports: [SequelizeModule.forFeature([Category]), ProductsModule],
  exports: [CategoryesService],
})
export class CategoryesModule {}
