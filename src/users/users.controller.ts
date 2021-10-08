import { Body, Controller, Delete, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateUserDTO } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  getAll() {
    return this.userService.getAllUser();
  }

  @Delete()
  delete(@Body('id') id: number) {
    console.log('id', id);
    return this.userService.deleteUser(id);
  }
}
