import { IsNumber, IsString } from "class-validator";
import {PartialType} from "@nestjs/mapped-types";
import { CreateMovieDto } from "./create-movie.dto";

// 필수 사항이 아님 (PartialType)
export class UpdateMovieDto extends PartialType(CreateMovieDto){

    //@nestjs/mapped-types 설치

    // 이래도 된다  그러나 부분옵션 설정이 있음
    // @IsString()
    // readonly title?: string;
    // @IsNumber()
    // readonly year?: number;
    // @IsString({each: true})
    // readonly genres?: string[];
}