import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AuthUseCases } from './use-cases';
import { PrismaService } from 'src/global/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { UsersModule } from 'src/users/users.module';

@Module({
  providers: [JwtService, PrismaService, AuthService, ...AuthUseCases],
  controllers: [AuthController],
  imports: [UsersModule],
})
export class AuthModule {}
