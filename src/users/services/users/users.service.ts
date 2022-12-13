import { CreateUserDto } from './../../dto/createUser.dto';
import { SerializeUser, User } from './../../types/idex';
import { plainToClass } from 'class-transformer'
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User as UserEntity } from 'src/typeorm';
import { encodePassword } from 'src/utils/bcrypt';

@Injectable()
export class UsersService {

  constructor(@InjectRepository(UserEntity) private readonly userRepository:Repository<UserEntity>) {

  }
    private users: User[] = [];

  getUsers() {
    return this.users.map((user) => new SerializeUser(user));
  }

  getUserByUsername(username: string) {
    return this.users.find((user) => user.username === username);
  }

  getUserById(id: number){
    return this.users.find((user) => user.id === id);
  }

  createUser(CreateUserDto: CreateUserDto) {
    const password = encodePassword(CreateUserDto.password);
    console.log(password);
  const newUser = this.userRepository.create({ ...CreateUserDto, password});
    return this.userRepository.save(newUser);
  }

  findUserByUsername(username: string) {
    return this.userRepository.findOneBy({ username });
  }

  findUserByEmail(email: string) {
    return this.userRepository.findOneBy({ email });
  }

}

