import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

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

/***
 * TypeOrmModule.forRootAsync({
  useFactory: () => ({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'test',*/
    // entities: [__dirname + '/**/*.entity{.ts,.js}'],
// synchronize: true,
// }),
// });
//  */
const options: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'chat_app_user',
  password: 'nopassword',
  database: 'chat_app_db',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
}

@Module({
  imports: [
    TypeOrmModule.forRoot(options),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
