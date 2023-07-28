import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IDataServices } from '../../../core';
import { Movie, MovieSchema, User, UserSchema, FavoriteMovie, FavoriteMovieSchema, MovieNote, MovieNoteSchema } from './model';
import { MongoDataServices } from './mongo-data-services.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Movie.name, schema: MovieSchema },
      { name: User.name, schema: UserSchema },
      { name: FavoriteMovie.name, schema: FavoriteMovieSchema },
      { name: MovieNote.name, schema: MovieNoteSchema },
    ]),
    MongooseModule.forRoot(process.env.MONGO_URI),
  ],
  providers: [
    {
      provide: IDataServices,
      useClass: MongoDataServices,
    },
  ],
  exports: [IDataServices],
})
export class MongoDataServicesModule {}
