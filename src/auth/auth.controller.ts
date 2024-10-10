import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDTO } from './dto/sign-in.dto';
import { RefreshTokenJwtGuard } from './infra/guards/refresh-token.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

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
