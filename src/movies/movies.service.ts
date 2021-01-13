import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
    private movies: Movie[] = [];

    getAll(): Movie[]{
        return this.movies;
    }

    getOne(id:string): Movie {
        // + 도 캐스팅알아서됨
        const movie = this.movies.find(movie => movie.id === +id)
        if(!movie){
            throw new NotFoundException(`Movie with ID: ${id} not found`);
        }
        return movie;
    }

    deleteOne(id:string):boolean{
        this.getOne(id);
        this.movies = this.movies.filter(movie => movie.id !== +id);
        return true;
    }

    create(movieData){
        this.movies.push({
            id: this.movies.length + 1,
            ...movieData
        })
    }

    update(id:string, updateData){
        const movie = this.getOne(id);
        this.deleteOne(id);
        // 찾은 element를 리스트에서 삭제 후 spread 문법으로 속성을 먼저 넣고 덮어씌움
        this.movies.push({...movie, ...updateData});
    }
}
