import { Module } from '@nestjs/common';
import { EnvModule } from './env/env.module';
import { AuthModule } from './auth/auth.module';
import { GlobalModule } from './global/global.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [EnvModule, AuthModule, GlobalModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
