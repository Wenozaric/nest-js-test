import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma_service/prisma.service';
import { createUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async createUser(dto: createUserDto) {
    try {
      const newUser = await this.prismaService.user.create({
        data: {
          email: dto.email,
        },
      });

      if (!newUser) throw new Error('ааа');
      return newUser;
    } catch (e) {}
  }
}
