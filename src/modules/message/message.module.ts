import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessageEntity } from './message.entity';
import { MessageController } from './message.controller';
import { UserEntity } from '../user/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MessageEntity, UserEntity])],
  controllers: [MessageController],
  providers: [],
})
export class MessageModule {}
