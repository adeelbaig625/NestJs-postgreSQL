import { Body, Controller, Get, Post } from '@nestjs/common';
import { SignInRequestDTO } from './dto/request/signin.request';
import { SignupRequestDTO } from './dto/request/signup.request';
import SignupResponseDTO from './dto/response/signup.response';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private _userService: UserService) {}
  @Post('/signup')
  create(@Body() data: SignupRequestDTO): Promise<SignupResponseDTO> {
    return this._userService.create(data);
  }

  @Post('/login')
  login(@Body() data: SignInRequestDTO): Promise<SignupResponseDTO> {
    return this._userService.login(data);
  }
}
