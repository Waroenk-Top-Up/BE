import { AuthService } from './../services/auth/auth.service';
import { Strategy } from 'passport-local';
import { PassportStrategy } from "@nestjs/passport";
import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(
        @Inject('AUTH_SERVICE') private readonly authService: AuthService,
        ) {
        super();
    }

    async validate(username: string, password: string) {
        console.log('Inside localStrategy.validate');
        console.log(username);
        console.log(password);
        const user = await this.authService.validateLogin(username, password);
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }

    
}