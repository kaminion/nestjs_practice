import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateMovieDto{

    @IsString()
    readonly title: string;
    @IsNumber()
    readonly year: number;
    // 각각 검사 옵션, Option
    @IsOptional()
    @IsString({each: true})
    readonly genres: string[];
}