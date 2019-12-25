import { Controller, Get, Logger, Post } from '@nestjs/common';
import { UserEntity } from '../user/user.entity';
import * as faker from 'faker';
import { MessageEntity } from './message.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Controller('messages')
export class MessageController {
  logger: Logger = new Logger('MessageController');

  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    @InjectRepository(MessageEntity)
    private messageRepository: Repository<MessageEntity>,
  ) {}

  @Get()
  getAllMessages() {
    return this.messageRepository.find();
  }

  @Post()
  createMessage() {
    return this.createMessageDemo()
  }

  async createMessageDemo() {
    const sender: UserEntity = await this.generateFakeUser()
    const receiver: UserEntity = await this.generateFakeUser()

    const message: MessageEntity = new MessageEntity();
    message.sender = sender;
    message.receiver = receiver;
    message.content = faker.lorem.words();

    const savedMessage = this.messageRepository.save(message)
    this.logger.log(savedMessage)
    return savedMessage;
  }

  async generateFakeUser(): Promise<UserEntity> {
    const entity: UserEntity = new UserEntity();
    entity.firstname = faker.name.firstName();
    entity.lastname = faker.name.lastName();
    entity.email = faker.internet.email();
    entity.password = faker.internet.password();

    const savedEntity = await this.userRepository.save(entity)
    this.logger.log(savedEntity)
    return savedEntity
  }
}
