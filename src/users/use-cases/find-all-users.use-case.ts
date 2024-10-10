import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/global/prisma.service';

@Injectable()
export class FindAllUsersUseCase {
  constructor(private prismaService: PrismaService) {}

  async execute() {
    return this.prismaService.user.findMany();
  }
}
