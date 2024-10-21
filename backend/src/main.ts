import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { envs } from './common/envs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS
  app.enableCors({
    origin: (origin, callback) => {
      if (!origin) {
        callback(null, true);
      } else {
        callback(null, true);
      }
    },
    credentials: true,
    methods: 'GET,HEAD,PUT,POST,DELETE',
    allowedHeaders: 'Content-Type, Authorization, X-Requested-With',
  });

  await app.listen(envs.PORT || 3000);
}

bootstrap().then(() => {
  console.log('SUCCESSFULLY STARTED THE SERVER');
});
