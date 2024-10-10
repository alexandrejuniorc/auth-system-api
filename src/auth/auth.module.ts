import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AuthUseCases } from './use-cases';
import { PrismaService } from 'src/global/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { APP_GUARD } from '@nestjs/core';
import { JwtGuard } from './infra/guards/jwt.guard';

@Module({
  providers: [
    JwtService,
    PrismaService,
    AuthService,
    ...AuthUseCases,
    { provide: APP_GUARD, useClass: JwtGuard },
  ],
  controllers: [AuthController],
})
export class AuthModule {}
