import { Injectable } from '@nestjs/common';
import { Movie } from '../../core/entities';
import { CreateMoviesDto } from '../../core/dtos';

@Injectable()
export class MovieFactoryService {
  createNewMovie(createMoviesDto: CreateMoviesDto) {
    const newMovie = new Movie();
    newMovie.title = createMoviesDto.title;
    newMovie.movie_id = createMoviesDto.movie_id;
    newMovie.movie_apild = createMoviesDto.movie_apild;
    newMovie.movie_imdb_id = createMoviesDto.movie_imdb_id;
    newMovie.language = createMoviesDto.language;
    newMovie.genres = createMoviesDto.genres;
    newMovie.original_language = createMoviesDto.original_language;
    newMovie.title = createMoviesDto.title;
    newMovie.overview = createMoviesDto.overview;
    newMovie.popularity = createMoviesDto.popularity;
    newMovie.poster_path = createMoviesDto.poster_path;
    newMovie.release_date = createMoviesDto.release_date;
    newMovie.video = createMoviesDto.video;
    newMovie.vote_average = createMoviesDto.vote_average;
    newMovie.vote_count = createMoviesDto.vote_count;

    return newMovie;
  }
}
