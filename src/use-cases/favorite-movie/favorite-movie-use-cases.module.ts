import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../services/data-services.module';
import { FavoriteMovieFactoryService } from './favorite-movie-factory.service';
import { FavoriteMovieUseCases } from './favorite-movie.use-case';
import { ThemoviedbDataServicesModule } from 'src/frameworks/themoviedb/themoviedb.module';

@Module({
  imports: [DataServicesModule, ThemoviedbDataServicesModule],
  providers: [FavoriteMovieFactoryService, FavoriteMovieUseCases],
  exports: [FavoriteMovieFactoryService, FavoriteMovieUseCases],
})
export class FavoriteMovieUseCasesModule {}
