import { InjectRepository } from '@nestjs/typeorm';
import RedisService from 'src/redis/redis.service';
import { Repository } from 'typeorm';
import { UserModel } from './user.entity';
import { v4 as uuid } from 'uuid';
import { appEnv } from '../../helpers/env.helper';
import { config } from 'dotenv';

config();
export class AuthModel {
  Id: number;
  // User: User | null;
  User: any;
  constructor(id: number, user?: any) {
    this.Id = id;
    if (user) {
      this.User = user;
    }
  }
}
export default class AuthService {
  constructor(
    @InjectRepository(UserModel)
    private userRepository: Repository<UserModel>,
    private _cacheService: RedisService,
  ) {}

  private _generateToken() {
    return uuid();
  }

  async CreateSession(userId: number): Promise<string> {
    const Token = this._generateToken();
    const Auth = new AuthModel(userId);
    await this._cacheService.Set(Token, Auth, appEnv('TOKEN_EXPIRATION', 3600));
    return Token;
  }

  async GetSession(token: string): Promise<AuthModel> {
    const Auth: AuthModel = await this._cacheService.Get(token);
    if (!Auth) return null;
    Auth.User = await this.userRepository.findOneBy({
      Id: Auth.Id,
      DeletedAt: null,
    });
    return Auth;
  }
}
