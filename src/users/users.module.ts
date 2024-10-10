import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UserUseCases } from './use-cases';

@Module({
  controllers: [UsersController],
  providers: [UsersService, ...UserUseCases],
})
export class UsersModule {}
