import { Injectable } from '@nestjs/common';
import { MovieNote } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';

@Injectable()
export class MovieNoteUseCases {
  constructor(private dataServices: IDataServices) {}

  getAllMovieNotes(): Promise<MovieNote[]> {
    return this.dataServices.movieNotes.getAll();
  }

  getMovieNoteById(id: any): Promise<MovieNote> {
    return this.dataServices.movieNotes.get(id);
  }

  async createMovieNote(movieNote: MovieNote): Promise<MovieNote> {
    try {
      const createdMovieNote = await this.dataServices.movieNotes.create(movieNote);

      return createdMovieNote;
    } catch (error) {
      throw error;
    }
  }

  updateMovieNote(movieNoteId: string, movieNote: MovieNote): Promise<MovieNote> {
    return this.dataServices.movieNotes.update(movieNoteId, movieNote);
  }
}
