import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateMovieNotesDto {
  @ApiProperty()
  @IsNumber()
  movie_id: number;

  @ApiProperty()
  @IsNumber()
  user_id: number;

  @ApiProperty()
  @IsString()
  note_title: string;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsString()
  url: string;
}

export class UpdateMovieNotesDto {
  @ApiProperty()
  @IsString()
  note_title: string;

  @ApiProperty()
  @IsString()
  url: string;
}
