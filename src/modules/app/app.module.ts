import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { UserModule } from '../user/user.module';
import { MessageModule } from '../message/message.module';
import { AppGateway } from './app.gateway';

/*
POSTGRES_HOST=127.0.0.1
POSTGRES_PORT=5432
POSTGRES_USER=postgres
POSTGRES_PASSWORD=mysecretpassword
POSTGRES_DATABASE=my_database
PORT=3000
MODE=DEV
RUN_MIGRATIONS=true
 */

const options: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'chat_app_user',
  password: 'nopassword',
  database: 'chat_app_db',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true, // todo: set to false
  logging: true, // todo: set to false
}

@Module({
  imports: [
    TypeOrmModule.forRoot(options),
    UserModule,
    MessageModule,
  ],
  controllers: [],
  providers: [AppService, AppGateway],
})
export class AppModule {}
