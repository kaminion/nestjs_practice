import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import {join} from 'path';


// 아무이름이나 써도 됨
// 여기가 entry point임
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 파이프는 미들웨어랑 비슷하다. use~ 거치는 단계 필터라고 볼 수 있음
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true,
    forbidNonWhitelisted:true,
    transform:true
  })) // 사용시 class-validator 패키지 필요,
  // whitelist 적용하면 데코레이터 적용한것만 받음(요청 및 반영 됨)
  // forbidNonWhitelisted 시 요청 자체를 막음
  // transform : 유저들이 보낸 값을 타입스크립에 선언한 실제 값으로 바꿔줌
  


  await app.listen(3000);
}
bootstrap();
