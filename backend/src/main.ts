import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { envs } from './common/envs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(envs.PORT);
}
bootstrap().then(() => {
  console.log('SUCCESSFULLY STARTED THE SERVER');
});
