import { Injectable } from '@nestjs/common';
import { CreateCartDTO } from './dto/create-cart.dto';

@Injectable()
export class CartService {
  async createCart(cartDto: CreateCartDTO) {
    //const category = await this.categoryRepository.create(categoryDto);
    console.log('Cart:', cartDto);
    return;
  }
}
