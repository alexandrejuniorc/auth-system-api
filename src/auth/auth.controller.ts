import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDTO } from './dto/sign-in.dto';
import { IsPublicRoute } from './infra/decorators/is-public-route.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @IsPublicRoute()
  @Post('sign-in')
  async signIn(@Body() dto: SignInDTO) {
    return await this.authService.signIn(dto);
  }
}
