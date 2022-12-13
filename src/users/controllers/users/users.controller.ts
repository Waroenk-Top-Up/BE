import { CreateUserDto } from './../../dto/createUser.dto';
import { HttpExceptionFilter } from './../../filters/httpExceptionFilters';
import { UserNotFound } from './../../exception/userNotFound';
import { Controller, Get, Inject, Param, HttpException, HttpStatus, UseInterceptors, ClassSerializerInterceptor, ParseIntPipe, UseFilters, Post, Body, UsePipes, ValidationPipe, SetMetadata } from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';
import { SerializeUser, User } from './../../types/idex';

@Controller('users')
export class UsersController {
    constructor(
        @Inject('USER_SERVICE') private readonly userService: UsersService,
    ) {}

    @UseInterceptors(ClassSerializerInterceptor)
    @Get('')
    getUsers() {
        return this.userService.getUsers();
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @Get('/username/:username')
    getByUsername(@Param('username') username: string) {
        const user =  this.userService.getUserByUsername(username);
        if (user) return new SerializeUser(user)
        else throw new HttpException('User Not Found', HttpStatus.BAD_REQUEST)
    }
    @UseInterceptors(ClassSerializerInterceptor)
        @UseFilters(HttpExceptionFilter)
    @Get('/id/:id')
    getById(@Param('id', ParseIntPipe) id: number) {
        const user = this.userService.getUserById(id);
        if (user) return new SerializeUser(user);
        else {
            throw new UserNotFound();
        }
    }
    @Post('create')
    @UsePipes(ValidationPipe)
    createUser(@Body() CreateUserDto: CreateUserDto) {
    return this.userService.createUser(CreateUserDto)
    }
}
