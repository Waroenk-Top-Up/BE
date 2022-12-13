import { UsersService } from './../../../users/services/users/users.service';
import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/createUser.dto';
import { comparePasswords } from 'src/utils/bcrypt';
import e from 'express';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {

    constructor(
        @Inject('USER_SERVICE') private readonly usersService: UsersService,
        private jwtService: JwtService
        ) {}

    async validateLogin(username: string, password: string){
        console.log('Inside Validate User')
        const userDB = await this.usersService.findUserByUsername(username)
        if (userDB) {
            const matched = comparePasswords(password, userDB.password)
            if(matched){
            console.log('User Validation Success!');
            return {
                access_token: this.jwtService.sign({
                    user: userDB, sub:1
                })
            }
            } else {
                console.log('Password Do not Match')
                return null;
            }
        }
        console.log('User Validation Failed!');
        return null;
    }

    async validateRegister(dto: CreateUserDto) {
    console.log('Inside Validate Register')
    const { email, username } = dto
    const inDB = 
    (await this.usersService.findUserByUsername(username)) || (await this.usersService.findUserByEmail(email))

    if (inDB) {
        throw new BadRequestException('User has already exists!')
}
const user = await this.usersService.createUser(dto)
console.log('Register Berhasil');
return user;

}

}

