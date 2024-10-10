import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UserUseCases } from './use-cases';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [UsersController],
  providers: [JwtService, UsersService, ...UserUseCases],
  exports: [UsersService],
})
export class UsersModule {}
