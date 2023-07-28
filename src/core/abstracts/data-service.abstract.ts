import { FavoriteMovie, Movie, MovieNote } from '../entities';
import { IGenericRepository } from './generic-repository.abstract';

export abstract class IDataServices {
  abstract favoriteMovies: IGenericRepository<FavoriteMovie>;

  abstract movieNotes: IGenericRepository<MovieNote>;

  abstract movies: IGenericRepository<Movie>;
}
