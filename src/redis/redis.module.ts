import { CacheModule } from '@nestjs/common';
import { Module } from '@nestjs/common';
import * as redisStore from 'cache-manager-redis-store';
import { appEnv } from '../../helpers/env.helper';
import { config } from 'dotenv';
import type { ClientOpts } from 'redis';
import RedisService from './redis.service';
config();

@Module({
  imports: [
    CacheModule.register<ClientOpts>({
      store: redisStore,
      host: appEnv('REDIS.HOST', 'localhost'),
      port: appEnv('REDIS.PORT', 6379),
    }),
  ],
  exports: [RedisService],
  providers: [RedisService],
})
export default class RedisModule {}
