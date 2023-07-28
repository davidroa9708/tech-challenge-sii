import { Injectable } from '@nestjs/common';
import { FavoriteMovie } from '../../core/entities';
import { IDataServices, IThemoviedbServices } from '../../core/abstracts';

@Injectable()
export class FavoriteMovieUseCases {
  constructor(private dataServices: IDataServices, private themoviedbServices: IThemoviedbServices) {}

  getAllFavoriteMovies(): Promise<FavoriteMovie[]> {
    return this.dataServices.favoriteMovies.getAll();
  }

  getFavoriteMovieById(id: any): Promise<FavoriteMovie> {
    return this.dataServices.favoriteMovies.get(id);
  }

  async createFavoriteMovie(favoriteMovie: FavoriteMovie): Promise<FavoriteMovie> {
    try {
      const movieValid = await this.themoviedbServices.getById(favoriteMovie.movie_id);
      if (movieValid) {
        return this.dataServices.favoriteMovies.create(favoriteMovie);
      } else {
        throw 'The movie does not exist';
      }
    } catch (error) {
      throw error;
    }
  }
}
