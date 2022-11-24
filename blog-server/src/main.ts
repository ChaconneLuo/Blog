import { NestApplication, NestFactory } from '@nestjs/core';
import { AppModule } from './module/app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create<NestApplication>(AppModule);
  app.enableCors({
    credentials: true,
    origin: true,
  });
  app.use(cookieParser());
  await app.listen(3000);
}
bootstrap();
