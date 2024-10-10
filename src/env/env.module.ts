import { Global, Module } from '@nestjs/common';
import { EnvService } from './env.service';
import { ConfigModule } from '@nestjs/config';
import { EnvModuleValidationSchema } from './env.schema';

@Global()
@Module({
  providers: [EnvService],
  exports: [EnvService],
  imports: [
    ConfigModule.forRoot({
      validate: (envConfig) => {
        return EnvModuleValidationSchema.parse(envConfig);
      },
    }),
  ],
})
export class EnvModule {}
