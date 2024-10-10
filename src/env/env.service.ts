import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EnvDTO } from './env.schema';

@Injectable()
export class EnvService extends ConfigService<EnvDTO, true> {
  get<T extends keyof EnvDTO>(key: T): EnvDTO[T] {
    return super.get(key);
  }
}
