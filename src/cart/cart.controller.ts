import { Body, Controller, Post } from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDTO } from './dto/create-cart.dto';

@Controller('cart')
export class CartController {
  constructor(private cartService: CartService){}
  @Post()
  createCart(@Body() cartDto: CreateCartDTO) {
    this.cartService.createCart(cartDto);
  }
}
