import { Module } from '@nestjs/common';
import { DataServicesModule } from './services/data-services.module';
import { AppController } from './controllers';
import { MovieController } from './controllers/movie.controller';
import { MovieUseCasesModule } from './use-cases/movie';
import { MovieNoteUseCasesModule } from './use-cases/movie-note';
import { FavoriteMovieUseCasesModule } from './use-cases/favorite-movie';
import { FavoriteMovieController } from './controllers/favorite-movie.controller';
import { MovieNoteController } from './controllers/movie-note.controller';
import { ThemoviedbServicesModule } from './services/themoviedb-services.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(),ThemoviedbServicesModule, DataServicesModule, MovieUseCasesModule, MovieNoteUseCasesModule, FavoriteMovieUseCasesModule],
  controllers: [AppController, MovieController, FavoriteMovieController, MovieNoteController],
  providers: [],
})
export class AppModule {}
