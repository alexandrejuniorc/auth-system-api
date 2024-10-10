import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/global/prisma.service';

@Injectable()
export class WhoamiUseCase {
  constructor(private prismaService: PrismaService) {}

  async execute(id: string) {
    return this.prismaService.user.findUnique({ where: { id } });
  }
}
