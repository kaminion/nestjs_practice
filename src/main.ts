import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// 아무이름이나 써도 됨
// 여기가 entry point임
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
