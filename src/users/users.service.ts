import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { CreateUserUseCase } from './use-cases/create-user.use-case';
import { FindAllUsersUseCase } from './use-cases/find-all-users.use-case';

@Injectable()
export class UsersService {
  constructor(
    private createUserUseCase: CreateUserUseCase,
    private findAllUsersUseCase: FindAllUsersUseCase,
  ) {}

  async createUser(dto: CreateUserDTO) {
    return this.createUserUseCase.execute(dto);
  }

  async findAllUsers() {
    return this.findAllUsersUseCase.execute();
  }
}
