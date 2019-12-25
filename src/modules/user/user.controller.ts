import { Controller, Get, Logger, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';

@Controller('users')
export class UserController {
  logger: Logger = new Logger('UserController');

  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  @Get()
  getUsers() {
    return this.userRepository.find();
  }

  @Post()
  createUser() {
    const entity: UserEntity = new UserEntity();
    entity.firstname = 'bob';
    entity.lastname = 'baker';
    entity.email = 'bob.baker@gmail.com';
    entity.password = 'fakepassword';

    const createdEntity = this.userRepository.save(entity);
    this.logger.log(createdEntity);
    return createdEntity;
  }
}
