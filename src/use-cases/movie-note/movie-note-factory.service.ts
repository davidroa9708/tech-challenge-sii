import { Injectable } from '@nestjs/common';

import { CreateMovieNotesDto, UpdateMovieNotesDto } from '../../core/dtos';
import { MovieNote } from '../../core/entities';

@Injectable()
export class MovieNoteFactoryService {
  createNewMovieNote(createMovieNotesDto: CreateMovieNotesDto) {
    const newMovieNote = new MovieNote();
    newMovieNote.movie_id = createMovieNotesDto.movie_id;
    newMovieNote.user_id = createMovieNotesDto.user_id;
    newMovieNote.note_title = createMovieNotesDto.note_title;
    newMovieNote.description = createMovieNotesDto.description;

    return newMovieNote;
  }

  updateMovieNote(createMovieNotesDto: UpdateMovieNotesDto) {
    const newMovieNote = new MovieNote();
    newMovieNote.note_title = createMovieNotesDto.note_title;
    newMovieNote.url = createMovieNotesDto.url;

    return newMovieNote;
  }
}
