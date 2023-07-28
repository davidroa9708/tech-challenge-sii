import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { FavoriteMovie as FavoriteMovieEntity } from 'src/core';

export type FavoriteMovieDocument = FavoriteMovie & Document;

@Schema()
export class FavoriteMovie implements FavoriteMovieEntity {
  @Prop()
  movie_id: number;

  @Prop()
  user_id: number;

  @Prop({ default: Date.now })
  created_at?: Date;
}

export const FavoriteMovieSchema = SchemaFactory.createForClass(FavoriteMovie);
