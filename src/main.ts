import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //Utilizar pipes a nivel aplicacion
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //remueve los datos del body que no coinciden en el dto
      forbidNonWhitelisted: true, //da un error por cada prop del body que no coincide en el dto
    }),
  );
  await app.listen(3000);
}
bootstrap();
