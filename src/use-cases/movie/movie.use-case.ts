import { Injectable } from '@nestjs/common';
import { Movie } from '../../core/entities';
import { IDataServices, IThemoviedbServices } from '../../core/abstracts';

@Injectable()
export class MovieUseCases {
  constructor(private dataServices: IDataServices, private themoviedbServices: IThemoviedbServices) {}

  getPopularMovies(): Promise<Movie[]> {
    return this.themoviedbServices.getPopularMovies();
  }

  searchMoviesByName(name: string): Promise<Movie[]> {
    return this.themoviedbServices.searchMoviesByName(name);
  }

  getMovieById(id: any): Promise<Movie> {
    return this.dataServices.movies.get(id);
  }

  async createMovie(movie: Movie): Promise<Movie> {
    try {
      const createdMovie = await this.dataServices.movies.create(movie);

      return createdMovie;
    } catch (error) {
      throw error;
    }
  }

  updateMovie(movieId: string, movie: Movie): Promise<Movie> {
    return this.dataServices.movies.update(movieId, movie);
  }
}
