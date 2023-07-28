import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../services/data-services.module';
import { MovieFactoryService } from './movie-factory.service';
import { MovieUseCases } from './movie.use-case';
import { ThemoviedbDataServicesModule } from 'src/frameworks/themoviedb/themoviedb.module';

@Module({
  imports: [DataServicesModule, ThemoviedbDataServicesModule],
  providers: [MovieFactoryService, MovieUseCases],
  exports: [MovieFactoryService, MovieUseCases],
})
export class MovieUseCasesModule {}
