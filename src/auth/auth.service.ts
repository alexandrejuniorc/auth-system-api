import { Injectable } from '@nestjs/common';
import { SignInUseCase } from './use-cases/sign-in.use-case';
import { SignInDTO } from './dto/sign-in.dto';

@Injectable()
export class AuthService {
  constructor(private signInUseCase: SignInUseCase) {}

  async signIn(dto: SignInDTO) {
    return this.signInUseCase.execute(dto);
  }
}
