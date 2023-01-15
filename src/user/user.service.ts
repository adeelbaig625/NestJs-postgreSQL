import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SignInRequestDTO } from './dto/request/signin.request';
import { SignupRequestDTO } from './dto/request/signup.request';
import { UserModel } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserModel)
    private readonly userRepository: Repository<UserModel>,
  ) {}
  create(user: SignupRequestDTO): Promise<SignupRequestDTO> {
    return this.userRepository.save(user);
  }
  login(user: SignInRequestDTO): Promise<SignupRequestDTO> {
    return this.userRepository.save(user);
  }

  findAll(): any {
    return console.log('hello');
  }
}
