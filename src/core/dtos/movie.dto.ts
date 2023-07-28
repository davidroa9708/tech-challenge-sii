import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsDate, IsNumber, IsString } from 'class-validator';
import { FavoriteMovie, Movie, MovieNote } from '../entities';

export class CreateMoviesDto {
  @ApiProperty()
  @IsNumber()
  movie_id: number;

  @ApiProperty()
  @IsNumber()
  movie_apild: number;

  @ApiProperty()
  @IsNumber()
  movie_imdb_id: number;

  @ApiProperty()
  @IsString()
  language: string;

  @ApiProperty()
  @IsString()
  genres: string;

  @ApiProperty()
  @IsString()
  original_language: string;

  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsString()
  overview: string;

  @ApiProperty()
  @IsNumber()
  popularity: number;

  @ApiProperty()
  @IsString()
  poster_path: string;

  @ApiProperty()
  @IsString()
  release_date: string;

  @ApiProperty()
  @IsString()
  video: string;

  @ApiProperty()
  @IsNumber()
  vote_average: number;

  @ApiProperty()
  @IsNumber()
  vote_count: number;
}

export class CreateResponseDto {
  @ApiProperty()
  @IsBoolean()
  success: boolean;

  @ApiProperty()
  data: Movie | FavoriteMovie | MovieNote;

  @ApiProperty()
  error: string;
}
