import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma_service/prisma.module';
import { ActorModule } from './actor/actor.module';
import { CommentModule } from './comment/comment.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [PrismaModule, ActorModule, CommentModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
