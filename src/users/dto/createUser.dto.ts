import { IsEmail, IsNotEmpty, maxLength, minLength, MinLength } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @MinLength(3)
    username: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @MinLength(4)
    password: string;
    
}