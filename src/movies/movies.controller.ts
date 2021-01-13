import { Controller, Get, Post, Query, Delete, Param, Patch, Body, Req, Res } from '@nestjs/common';
import { MoviesService } from './movies.service';

import {Movie} from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Controller('movies')
export class MoviesController {

    constructor(private readonly moviesService: MoviesService){}

    // 인자로 넣어줘
    //@Req() req, @Res() res 직접사용시
    @Get()
    getAll() : Movie[]{
        return this.moviesService.getAll();
    }

    // // id로 인식해서 위로 끌어올림
    // @Get("search")
    // search(@Query('year') searchingYear : string){
    //     return `we are search for a movie made after : ${searchingYear}`;
    // }

    // @Param 으로 매핑시켜줌
    @Get(":id")
    getOne(@Param('id') movieId : number) : Movie {
        return this.moviesService.getOne(movieId);
    }

    // 읽어올 때 DTO로 취급한다
    @Post()
    create(@Body() movieData: CreateMovieDto ){
        return this.moviesService.create(movieData);
    }

    @Delete(":id")
    deleteMovie(@Param('id') movieId : number){
        return this.moviesService.deleteOne(movieId);
    }

    @Patch(":id")
    patchMovie(@Param('id') movieId: number, @Body() updateData: UpdateMovieDto){
        return this.moviesService.update(movieId, updateData);
    }


}
