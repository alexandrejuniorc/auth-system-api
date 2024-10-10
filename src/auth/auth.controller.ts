import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDTO } from './dto/sign-in.dto';
import { RefreshTokenJwtGuard } from './infra/guards/refresh-token.guard';
import { UsersService } from 'src/users/users.service';
import { CreateUserDTO } from 'src/users/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
  ) {}

  @Post('sign-up')
  async signUp(@Body() dto: CreateUserDTO) {
    return await this.usersService.createUser(dto);
  }

  @Post('sign-in')
  async signIn(@Body() dto: SignInDTO) {
    return await this.authService.signIn(dto);
  }

  @UseGuards(RefreshTokenJwtGuard)
  @Post('refresh-token')
  async refreshToken(@Request() req) {
    return await this.authService.refreshToken(req.user);
  }
}
