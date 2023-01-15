import { Body, Controller, Get, Post } from '@nestjs/common';
import { SignupRequestDTO } from './dto/request/signup.request';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private _userService: UserService) {}
  @Post()
  create(@Body() data: SignupRequestDTO): Promise<any> {
    return this._userService.create(data);
  }

  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
}
