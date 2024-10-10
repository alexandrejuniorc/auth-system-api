import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class HashService {
  async hash(text: string) {
    return await bcrypt.hash(text, 10);
  }

  async compare(text: string, hash: string) {
    return bcrypt.compare(text, hash);
  }
}
