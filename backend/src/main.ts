import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    })
  )

  app.setGlobalPrefix('api')
  const config = new DocumentBuilder()
    .setTitle('Routes API')
    .setDescription('Esta es una API que guarda las rutas disponibles de mi aplicacion')
    .setVersion('1.0')
    .addTag('routes')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document);

  app.enableCors();
  await app.listen(4000);
}
bootstrap();
