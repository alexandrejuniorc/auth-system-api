import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SignInDTO } from '../dto/sign-in.dto';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/global/prisma.service';
import { HashService } from 'src/global/hash.service';
import { EnvService } from 'src/env/env.service';

@Injectable()
export class SignInUseCase {
  constructor(
    private jwtService: JwtService,
    private prismaService: PrismaService,
    private hashService: HashService,
    private envService: EnvService,
  ) {}

  async execute(dto: SignInDTO) {
    const user = await this.validateUser(dto);
    const payload = {
      username: user.email,
      sub: { name: user.name },
    };

    return {
      user,
      accessToken: await this.jwtService.signAsync(payload, {
        expiresIn: '20s',
        secret: this.envService.get('JWT_SECRET'),
      }),
    };
  }

  async validateUser(dto: SignInDTO) {
    const user = await this.prismaService.user.findUnique({
      where: { email: dto.username },
    });
    const isPasswordValid = await this.hashService.compare(
      dto.password,
      user.password,
    );
    if (user && isPasswordValid) {
      const { password, ...result } = user;
      return result;
    }
    throw new UnauthorizedException('Invalid credentials');
  }
}
