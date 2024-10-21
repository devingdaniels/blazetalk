import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { envs } from './common/envs';
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger({
      transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'combined.log' }),
      ],
    }),
  });

  app.enableCors({
    origin: true,
    credentials: true,
    allowedHeaders: 'Content-Type, Authorization',
    methods: 'GET, POST, PUT, DELETE',
  });

  await app.listen(envs.PORT);
}

bootstrap().then(() => {
  console.log('SUCCESSFULLY STARTED THE SERVER');
});
