import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { envs } from './common/envs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS for the frontend
  app.enableCors({
    origin: [
      'http://localhost:3010',
      'https://realtalk-dx8o5d5ix-devingdaniels-projects.vercel.app/',
    ],
    credentials: true, // Allow credentials
  });
  await app.listen(envs.PORT);
}
bootstrap().then(() => {
  console.log('SUCCESSFULLY STARTED THE SERVER');
});
