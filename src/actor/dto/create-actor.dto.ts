import { IsNotEmpty, Length } from "class-validator";

export class createActorDto{
    @IsNotEmpty()
    @Length(2, 40)
    name: string

    @IsNotEmpty()
    @Length(2, 40)
    surname: string
}