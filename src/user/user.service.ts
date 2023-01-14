import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  create(user: any): any {
    return console.log(user);
  }

  findAll(): any {
    return console.log('hello');
  }
}
