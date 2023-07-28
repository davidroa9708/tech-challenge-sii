import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateResponseDto, CreateFavoriteMoviesDto } from '../core/dtos';
import { FavoriteMovieFactoryService, FavoriteMovieUseCases } from 'src/use-cases/favorite-movie';

@Controller('api/v1/favorite-movies')
export class FavoriteMovieController {
  constructor(private favoriteMovieUseCases: FavoriteMovieUseCases, private favoriteMovieFactoryService: FavoriteMovieFactoryService) {}

  @Get()
  async getAll() {
    return this.favoriteMovieUseCases.getAllFavoriteMovies();
  }

  @Post()
  async createFavoriteMovie(@Body() favoriteMovieDto: CreateFavoriteMoviesDto): Promise<CreateResponseDto> {
    const createFavoriteMovieResponse = new CreateResponseDto();
    try {
      const favoriteMovie = this.favoriteMovieFactoryService.createNewFavoriteMovie(favoriteMovieDto);
      const data = await this.favoriteMovieUseCases.createFavoriteMovie(favoriteMovie);
      createFavoriteMovieResponse.success = true;
      createFavoriteMovieResponse.data = data;
    } catch (error) {
      createFavoriteMovieResponse.success = false;
      createFavoriteMovieResponse.error = error;
    }

    return createFavoriteMovieResponse;
  }
}
