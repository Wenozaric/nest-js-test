import { IsEmail, IsNotEmpty, Length } from "class-validator";

export class createUserDto{
    @IsNotEmpty()
    @IsEmail()
    email: string
}