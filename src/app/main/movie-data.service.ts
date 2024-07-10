import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {MoviesInterface} from './interfaces';
import {MovieInterface} from './interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieDataService {
  apiKey: string = 'b3801dc748a52e2251574b8e37a9555b';
  token="17e72e1b036e3739b9e411da327db90fd3d7ffc5";
  id='d5b5f1b103110d412db54ee475fb72a53be70a5f'
  constructor(private http: HttpClient) { }
  getMovies(): Observable<MoviesInterface[]> {
    return this.http.get<MoviesInterface[]>(`https://api.themoviedb.org/3/movie/now_playing?api_key=${this.apiKey}`)
  }
  getMovie(id: number) {
    return this.http.get<MovieInterface>(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiKey}`);
  }
  getToken(){
    return this.http.get(`https://api.themoviedb.org/3/authentication/token/new?api_key=${this.apiKey}`)
  }
  getId() {
    return this.http.post(`https://api.themoviedb.org/3/authentication/session/new?api_key=${this.apiKey}`,
      {
        "request_token": '17e72e1b036e3739b9e411da327db90fd3d7ffc5'
      }
    )
  }

  getWatchList() {
    return this.http.get(`https://api.themoviedb.org/3/account/1/watchlist/movies?api_key=${this.apiKey}&session_id=${this.id}`)
  }

  addMovie() {
    return this.http.post(`https://api.themoviedb.org/3/account/{account_id}/watchlist?api_key=${this.apiKey}&session_id=${this.id}`,
      {
        'media_type': 'movie',
        'media_id': 1022789,
        'watchlist': true
      }
    )
  }
}
