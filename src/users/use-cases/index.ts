import { CreateUserUseCase } from './create-user.use-case';
import { FindAllUsersUseCase } from './find-all-users.use-case';
import { WhoamiUseCase } from './whoami.use-case';

export const UserUseCases = [
  CreateUserUseCase,
  FindAllUsersUseCase,
  WhoamiUseCase,
];
