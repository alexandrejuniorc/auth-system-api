import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { EnvService } from 'src/env/env.service';

@Injectable()
export class RefreshTokenUseCase {
  private EXPIRE_TIME = 20 * 1000; // 20 seconds

  constructor(
    private jwtService: JwtService,
    private envService: EnvService,
  ) {}

  async execute(user: any) {
    const payload = {
      username: user.username,
      sub: user.sub,
    };

    return {
      access_token: await this.jwtService.signAsync(payload, {
        expiresIn: this.envService.get('AUTH_ACCESS_TOKEN_EXPIRATION'),
        secret: this.envService.get('JWT_SECRET'),
      }),
      refresh_token: await this.jwtService.signAsync(payload, {
        expiresIn: this.envService.get('AUTH_REFRESH_TOKEN_EXPIRATION'),
        secret: this.envService.get('JWT_REFRESH_TOKEN_SECRET'),
      }),
      expires_in: new Date().setTime(new Date().getTime() + this.EXPIRE_TIME),
    };
  }
}
