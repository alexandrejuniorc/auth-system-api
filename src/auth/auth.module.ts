import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AuthUseCases } from './use-cases';
import { PrismaService } from 'src/global/prisma.service';

@Module({
  providers: [PrismaService, AuthService, ...AuthUseCases],
  controllers: [AuthController],
})
export class AuthModule {}
