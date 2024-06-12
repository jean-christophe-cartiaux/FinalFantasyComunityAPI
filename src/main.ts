import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ValidationPipe} from "@nestjs/common";
const cookieSession=require('cookie-session');
import* as dotenv from "dotenv";
import * as process from "node:process";




dotenv.config();
async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  app.use(
      cookieSession({
        keys:[process.env.COOKIE_KEY],
      })
  );
  app.useGlobalPipes(new ValidationPipe())
  app.enableCors({
      origin: 'http://localhost:4200', // Autoriser seulement cette origine
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
      credentials: true,
  })
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
