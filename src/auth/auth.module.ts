import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './utils/jwtStrategy';
import { LocalStrategy } from './utils/LocalStrategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './../users/services/users/users.service';
import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth/auth.controller';
import { AuthService } from './services/auth/auth.service';
import { PassportModule } from '@nestjs/passport';
import { User } from 'src/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User]), PassportModule, JwtModule.register({
    secret: 'TopUp',
    signOptions: {expiresIn: '60s'}
  })],
  controllers: [AuthController],
  providers: [
    {
      provide: 'AUTH_SERVICE',
      useClass: AuthService,
    },
    {
      provide: 'USER_SERVICE',
      useClass: UsersService
    },
    LocalStrategy, JwtStrategy,
  ]
})
export class AuthModule {}
