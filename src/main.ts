import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app: NestExpressApplication = await NestFactory.create<NestExpressApplication>(AppModule);
  const path = join(__dirname, '...', 'static')
  const pathTwo = join(__dirname, '../src/static')
  console.log(path)
  console.log(pathTwo)
  app.useStaticAssets(join(__dirname, '../src/static'));
  await app.listen(3000);
}
bootstrap();
