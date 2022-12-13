import { User } from './users/types/idex';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from './typeorm';
import { UsersModule } from './users/users.module';
import { ProdukModule } from './produk/produk.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthModule } from './auth/auth.module';
import { Index } from 'typeorm';


@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }),
    UsersModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: parseInt(<string>process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    entities: [Index] ,
    autoLoadEntities: true,
    synchronize: true,
  }), ProdukModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
