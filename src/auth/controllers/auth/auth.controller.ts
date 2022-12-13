import { AuthService } from './../../services/auth/auth.service';
import { Body, Controller, Get, Inject, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateUserDto } from 'src/users/dto/createUser.dto';

@Controller('auth')
export class AuthController {

    constructor(@Inject('AUTH_SERVICE') private readonly authService: AuthService,
    ) {}

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Body('username') username: string , @Body('password') password: string) {
        return this.authService.validateLogin(username, password)
    }

    @Post('Register')   
    async Register(@Body() dto: CreateUserDto) {
        return this.authService.validateRegister(dto)
    }

}
