import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { IsPublicRoute } from 'src/auth/infra/decorators/is-public-route.decorator';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @IsPublicRoute()
  @Post('create')
  async createUser(@Body() dto: CreateUserDTO) {
    return await this.usersService.createUser(dto);
  }

  @Get('all')
  async findAllUsers() {
    return await this.usersService.findAllUsers();
  }
}
