import { Movie } from '../entities';

export abstract class IThemoviedbServices {
  abstract getById(id: number): Promise<Movie>;
  abstract getPopularMovies(): Promise<any>;
  abstract searchMoviesByName(name: string): Promise<any>;
}
