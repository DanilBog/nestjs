import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDTO } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  login(@Body() user: CreateUserDTO) {
    console.log('user', user);
    return this.authService.login(user);
  }

  @Post('/registration')
  registration(@Body() user: CreateUserDTO) {
    console.log('user', user);
    return this.authService.registrationUser(user);
  }
}
