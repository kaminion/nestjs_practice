import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';
import { ClientModule } from './client/client.module';


// 데코레이터, 클래스에 함수 기능 추가 가능
@Module({
  imports: [MoviesModule, ClientModule],
  controllers: [AppController], 
  providers: [],
}) // NestJS에서 모듈은 해당하는 컨트롤러랑 서비스를 가져야함
export class AppModule {}
