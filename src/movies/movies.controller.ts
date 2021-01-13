import { Controller, Get, Post, Query, Delete, Param, Patch, Body } from '@nestjs/common';
import { MoviesService } from './movies.service';

import {Movie} from './entities/movie.entity';

@Controller('movies')
export class MoviesController {

    constructor(private readonly moviesService: MoviesService){}

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
    getOne(@Param('id') movieId : string) : Movie {
        return this.moviesService.getOne(movieId);
    }

    @Post()
    create(@Body() movieData ){
        return this.moviesService.create(movieData);
    }

    @Delete(":id")
    deleteMovie(@Param('id') movieId : string){
        return this.moviesService.deleteOne(movieId);
    }

    @Patch(":id")
    patchMovie(@Param('id') movieId: string, @Body() updateData){
        return this.moviesService.update(movieId, updateData);
    }


}
