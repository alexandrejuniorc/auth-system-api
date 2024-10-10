import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDTO } from '../dto/create-user.dto';
import { PrismaService } from 'src/global/prisma.service';
import { HashService } from 'src/global/hash.service';

@Injectable()
export class CreateUserUseCase {
  constructor(
    private prismaService: PrismaService,
    private hashService: HashService,
  ) {}

  async execute(dto: CreateUserDTO) {
    const userAlreadyExists = await this.prismaService.user.findUnique({
      where: { email: dto.email },
    });
    if (userAlreadyExists) {
      throw new ConflictException('E-mail already in use!');
    }
    const passwordHash = await this.hashService.hash(dto.password);
    const newUser = await this.prismaService.user.create({
      data: { ...dto, password: passwordHash },
    });
    const { password, ...result } = newUser;
    return result;
  }
}
