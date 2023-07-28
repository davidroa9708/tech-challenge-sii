import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Movie as MovieEntity } from 'src/core';

export type MovieDocument = Movie & Document;

@Schema()
export class Movie implements MovieEntity {
  @Prop()
  movie_id: number;

  @Prop()
  movie_apild: number;

  @Prop()
  movie_imdb_id: number;

  @Prop()
  language: string;

  @Prop()
  genres: string;

  @Prop()
  original_language: string;

  @Prop()
  title: string;

  @Prop()
  overview: string;

  @Prop()
  popularity: number;

  @Prop()
  poster_path: string;

  @Prop()
  release_date: string;

  @Prop()
  video: string;

  @Prop()
  vote_average: number;

  @Prop()
  vote_count: number;
}

export const MovieSchema = SchemaFactory.createForClass(Movie);
