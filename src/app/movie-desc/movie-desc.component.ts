import { Component, OnInit } from '@angular/core';
import { MovieDataService } from '../main/movie-data.service';
import {MovieInterface} from '../main/interfaces';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-movie-desc',
  templateUrl: './movie-desc.component.html',
  styleUrl: './movie-desc.component.css'
})
export class MovieDescComponent implements OnInit {
  movies: MovieInterface[] = [];
  genres: any = [];
  countries: any = [];
  movie: MovieInterface;
  constructor(private data: MovieDataService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}
  ngOnInit(): void {
    let movieId : number
    this.activatedRoute.params.forEach(param=> movieId = param['movie-id']);
    this.data.getMovie(movieId).subscribe((res: any)=> {
      
      
      this.movie = res as MovieInterface;
      this.genres = this.movie.genres
      this.countries = this.movie.production_countries
      console.log(res);
    })
  }
}