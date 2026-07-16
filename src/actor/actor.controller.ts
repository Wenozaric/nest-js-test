import { Body, Controller, Post } from '@nestjs/common';
import { ActorService } from './actor.service';
import { createActorDto } from './dto/create-actor.dto';

@Controller('actor')
export class ActorController {
  constructor(private readonly actorService: ActorService) {}

  @Post('create')
  createActor(@Body() dto: createActorDto) {
    return this.actorService.createActor(dto);
  }
}
