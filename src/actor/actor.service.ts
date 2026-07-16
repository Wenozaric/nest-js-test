import { Injectable } from '@nestjs/common';
import { createActorDto } from './dto/create-actor.dto';
import { PrismaService } from 'src/prisma_service/prisma.service';

@Injectable()
export class ActorService {
    constructor(private readonly prismaService: PrismaService) {}

    async createActor(dto: createActorDto){
        try{
            const newActor = await this.prismaService.actor.create({
                data:{
                    name: dto.name,
                    surname: dto.surname
                }
            })

            if( !newActor ) throw new Error('ааа')
            return newActor
                
        } catch ( e ){

        }
    }
}
