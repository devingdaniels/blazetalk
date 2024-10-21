import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { envs } from './common/envs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS for the frontend
  const allowedOrigins = [
    'http://localhost:3010', // Local development URL
    'https://realtalk-p1vm019ak-devingdaniels-projects.vercel.app', // Vercel deployment URL
    'https://blazetalk-f7qvwe3m1-devingdaniels-projects.vercel.app/',
  ];

  app.enableCors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
  });

  await app.listen(envs.PORT);
}
bootstrap().then(() => {
  console.log('SUCCESSFULLY STARTED THE SERVER');
});
