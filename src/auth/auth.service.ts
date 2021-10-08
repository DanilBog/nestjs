import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDTO } from 'src/users/dto/create-user.dto';
import { User } from 'src/users/user.model';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcryptjs'

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtSrvice: JwtService,
  ) {}

  async createUser(dto: CreateUserDTO) {
    // const user = await this.userRepository.create(dto);
    // return user;
  }

  async login(userDto: CreateUserDTO) {
    const user = await this.validateUser(userDto);
    return this.generateToken(user);
  }

  async registrationUser(user: CreateUserDTO) {
    const condidate = await this.userService.getUserByEmail(user.email);
    if (condidate) {
      throw new HttpException(
        'Пользователь с таким email уже существует',
        HttpStatus.BAD_REQUEST,
      );
    }
    console.log('user.password', user.password);
    const hashPassword = await bcrypt.hash(user.password, 5);
    const newUser = await this.userService.createUser({
      ...user,
      password: hashPassword,
    });
    console.log('hash', hashPassword);
    return this.generateToken(newUser);
  }

  async generateToken(user: User) {
    const payload = {
      email: user.email,
      id: user.id,
    };
    return {
      token: this.jwtSrvice.sign(payload),
    };
  }

  private async validateUser(userDto: CreateUserDTO) {
    const user = await this.userService.getUserByEmail(userDto.email);
    const passwordEqual = await bcrypt.compare(userDto.password, user.password);
    if (user && passwordEqual) {
      return user;
    }
    throw new UnauthorizedException({
      message: 'Не правильный логин или пароль',
    });
  }
}
