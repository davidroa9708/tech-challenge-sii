import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../services/data-services.module';
import { MovieNoteFactoryService } from './movie-note-factory.service';
import { MovieNoteUseCases } from './movie-note.use-case';

@Module({
  imports: [DataServicesModule],
  providers: [MovieNoteFactoryService, MovieNoteUseCases],
  exports: [MovieNoteFactoryService, MovieNoteUseCases],
})
export class MovieNoteUseCasesModule {}
