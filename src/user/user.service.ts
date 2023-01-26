import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SignInRequestDTO } from './dto/request/signin.request';
import { SignupRequestDTO } from './dto/request/signup.request';
import { UserModel } from './user.entity';
import * as bcrypt from 'bcrypt';
import AuthService from './auth.service';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserModel)
    private readonly _userRepository: Repository<UserModel>,
    private readonly _authService: AuthService,
  ) {}
  async create(user: SignupRequestDTO): Promise<any> {
    const User = await this._userRepository.findOneBy({ Email: user.Email });
    if (User) {
      throw new BadRequestException('User already exists');
    }
    const HashedPassword = await bcrypt.hash(user.Password, 10);
    const newUser = await this._userRepository.save({
      ...user,
      Password: HashedPassword,
    });
    return newUser;
  }
  async login(data: SignInRequestDTO): Promise<any> {
    const User = await this._userRepository.findOneBy({ Email: user.Email });
    if (!User) {
      throw new BadRequestException('User does not exist');
    }
    const isPasswordValid = await bcrypt.compare(data.Password, User.Password);
    if (!isPasswordValid) {
      throw new BadRequestException('Invalid Password');
    }
    const Token = await this._authService.CreateSession(User.Id);
    return { User, Token };
  }

  findAll(): any {
    return console.log('hello');
  }
}
