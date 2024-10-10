import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('create')
  async createUser(@Body() dto: CreateUserDTO) {
    return await this.usersService.createUser(dto);
  }

  @Get('all')
  async findAllUsers() {
    return await this.usersService.findAllUsers();
  }
}
