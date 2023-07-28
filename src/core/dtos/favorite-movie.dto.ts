import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CreateFavoriteMoviesDto {
  @ApiProperty()
  @IsNumber()
  movie_id: number;

  @ApiProperty()
  @IsNumber()
  user_id: number;
}
