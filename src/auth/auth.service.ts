import { Injectable } from '@nestjs/common';
import { SignInUseCase } from './use-cases/sign-in.use-case';
import { SignInDTO } from './dto/sign-in.dto';
import { RefreshTokenUseCase } from './use-cases/refresh-token.use-case';

@Injectable()
export class AuthService {
  constructor(
    private signInUseCase: SignInUseCase,
    private refreshTokenUseCase: RefreshTokenUseCase,
  ) {}

  async signIn(dto: SignInDTO) {
    return this.signInUseCase.execute(dto);
  }

  async refreshToken(user: any) {
    return this.refreshTokenUseCase.execute(user);
  }
}
