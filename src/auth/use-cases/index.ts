import { RefreshTokenUseCase } from './refresh-token.use-case';
import { SignInUseCase } from './sign-in.use-case';

export const AuthUseCases = [SignInUseCase, RefreshTokenUseCase];
