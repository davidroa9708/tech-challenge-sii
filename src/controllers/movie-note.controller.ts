import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { CreateMovieNotesDto, CreateResponseDto, UpdateMovieNotesDto } from '../core/dtos';
import { MovieNoteUseCases, MovieNoteFactoryService } from '../use-cases/movie-note';
import { ApiParam } from '@nestjs/swagger';

@Controller('api/v1/movie-notes')
export class MovieNoteController {
  constructor(private movieNoteUseCases: MovieNoteUseCases, private movieNoteFactoryService: MovieNoteFactoryService) {}

  @Get()
  async getAll() {
    return this.movieNoteUseCases.getAllMovieNotes();
  }

  @Post()
  async createMovieNote(@Body() MovieNoteDto: CreateMovieNotesDto): Promise<CreateResponseDto> {
    const createMovieNoteResponse = new CreateResponseDto();
    try {
      const movieNote = this.movieNoteFactoryService.createNewMovieNote(MovieNoteDto);
      const data = await this.movieNoteUseCases.createMovieNote(movieNote);

      createMovieNoteResponse.success = true;
      createMovieNoteResponse.data = data;
    } catch (error) {
      createMovieNoteResponse.success = false;
    }

    return createMovieNoteResponse;
  }

  @Put(':id')
  updateMovieNote(@Param('id') MovieNoteId: string, @Body() updateMovieNoteDto: UpdateMovieNotesDto) {
    const MovieNote = this.movieNoteFactoryService.updateMovieNote(updateMovieNoteDto);
    return this.movieNoteUseCases.updateMovieNote(MovieNoteId, MovieNote);
  }
}
