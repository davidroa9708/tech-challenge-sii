import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { CreateMoviesDto, CreateResponseDto } from '../core/dtos';
import { MovieUseCases, MovieFactoryService } from '../use-cases/movie';
import { ApiParam } from '@nestjs/swagger';

@Controller('api/v1/movies')
export class MovieController {
  constructor(private movieUseCases: MovieUseCases, private movieFactoryService: MovieFactoryService) {}

  @Get('search/:name')
  @ApiParam({ name: 'name', required: true, schema: { oneOf: [{ type: 'string' }] } })
  async getAll(@Param('name') name: string) {
    return this.movieUseCases.searchMoviesByName(name);
  }

  @Get('popular')
  getPopularMovies() {
    return this.movieUseCases.getPopularMovies();
  }

  @Post()
  async createMovie(@Body() MovieDto: CreateMoviesDto): Promise<CreateResponseDto> {
    const createMovieResponse = new CreateResponseDto();
    try {
      const Movie = this.movieFactoryService.createNewMovie(MovieDto);
      const data = await this.movieUseCases.createMovie(Movie);

      createMovieResponse.success = true;
      createMovieResponse.data = data;
    } catch (error) {
      createMovieResponse.success = false;
    }

    return createMovieResponse;
  }
}
