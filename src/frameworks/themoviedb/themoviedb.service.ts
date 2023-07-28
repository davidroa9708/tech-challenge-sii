import { Injectable } from '@nestjs/common';
import { IThemoviedbServices } from '../../core/abstracts';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';
import { AxiosError } from 'axios';

@Injectable()
export class ThemoviedbService implements IThemoviedbServices {
  constructor(private readonly httpService: HttpService) {}

  async getById(id: number): Promise<any> {
    const { data } = await firstValueFrom(
      this.httpService
        .get(`https://api.themoviedb.org/3/movie/${id}`, {
          headers: {
            Authorization: `Bearer ${process.env.THE_MOVIE_API_KEY}`,
          },
        })
        .pipe(
          catchError((error: AxiosError) => {
            throw 'The movie does not exist!';
          }),
        ),
    );
    return data;
  }

  async getPopularMovies(): Promise<any> {
    const { data } = await firstValueFrom(
      this.httpService
        .get('https://api.themoviedb.org/3/movie/popular', {
          headers: {
            Authorization: `Bearer ${process.env.THE_MOVIE_API_KEY}`,
          },
        })
        .pipe(
          catchError((error: AxiosError) => {
            throw 'An error happened searching popular movies!';
          }),
        ),
    );
    return data;
  }

  async searchMoviesByName(name: string): Promise<any> {
    const { data } = await firstValueFrom(
      await this.httpService
        .get(`https://api.themoviedb.org/3/search/movie?query=${name}&`, {
          headers: {
            Authorization: `Bearer ${process.env.THE_MOVIE_API_KEY}`,
          },
        })
        .pipe(
          catchError((error: AxiosError) => {
            throw 'An error happened searching by name!';
          }),
        ),
    );
    return data;
  }
}
