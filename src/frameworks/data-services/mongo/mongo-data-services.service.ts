import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IDataServices } from '../../../core';
import { MongoGenericRepository } from './mongo-generic-repository';
import { Movie, MovieDocument, MovieNote, MovieNoteDocument, FavoriteMovie, FavoriteMovieDocument } from './model';

@Injectable()
export class MongoDataServices implements IDataServices, OnApplicationBootstrap {
  movies: MongoGenericRepository<Movie>;
  movieNotes: MongoGenericRepository<MovieNote>;
  favoriteMovies: MongoGenericRepository<FavoriteMovie>;

  constructor(
    @InjectModel(Movie.name)
    private MovieRepository: Model<MovieDocument>,
    @InjectModel(MovieNote.name)
    private MovieNoteRepository: Model<MovieNoteDocument>,
    @InjectModel(FavoriteMovie.name)
    private FavoriteMovieRepository: Model<FavoriteMovieDocument>,
  ) {}

  onApplicationBootstrap() {
    this.movies = new MongoGenericRepository<Movie>(this.MovieRepository);
    this.movieNotes = new MongoGenericRepository<MovieNote>(this.MovieNoteRepository);
    this.favoriteMovies = new MongoGenericRepository<FavoriteMovie>(this.FavoriteMovieRepository);
  }
}
