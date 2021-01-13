import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';

// PROVIDER가 DI 역할을 함, MoviesSevice를 import 함 
// Controller에 Injection 함
@Module({
    controllers:[MoviesController],
    providers:[MoviesService]
})
export class MoviesModule {}
