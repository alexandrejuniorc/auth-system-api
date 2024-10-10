import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtGuard } from 'src/auth/infra/guards/jwt.guard';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @UseGuards(JwtGuard)
  @Get(':id')
  async whoami(@Param('id') id: string) {
    return await this.usersService.whoami(id);
  }

  @Get('all')
  async findAllUsers() {
    return await this.usersService.findAllUsers();
  }
}
