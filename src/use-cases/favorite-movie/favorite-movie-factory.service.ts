import { Injectable } from '@nestjs/common';
import { FavoriteMovie } from '../../core/entities';
import { CreateFavoriteMoviesDto } from '../../core/dtos';

@Injectable()
export class FavoriteMovieFactoryService {
  createNewFavoriteMovie(createFavoriteMoviesDto: CreateFavoriteMoviesDto) {
    const newFavoriteMovie = new FavoriteMovie();
    newFavoriteMovie.movie_id = createFavoriteMoviesDto.movie_id;
    newFavoriteMovie.user_id = createFavoriteMoviesDto.user_id;

    return newFavoriteMovie;
  }
}
