import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { MovieNote as MovieNoteEntity } from 'src/core';

export type MovieNoteDocument = MovieNote & Document;

@Schema()
export class MovieNote implements MovieNoteEntity {
  @Prop()
  movie_id: number;

  @Prop()
  user_id: number;

  @Prop()
  note_title: string;

  @Prop()
  description: string;

  @Prop()
  url: string;

  @Prop({ default: Date.now })
  created_at?: Date;
}

export const MovieNoteSchema = SchemaFactory.createForClass(MovieNote);
