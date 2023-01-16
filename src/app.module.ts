import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'database/data.source';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import RedisModule from './redis/redis.module';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions), RedisModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
