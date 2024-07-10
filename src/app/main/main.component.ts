import { Component, OnInit } from '@angular/core';
import { MovieDataService } from './movie-data.service';
import { MoviesInterface } from './interfaces';
import { Router } from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit{
  movies : MoviesInterface[] = [];
  toggle: boolean = true;
  firstDate : any;
  lastDate: any;
  sortValue: any;
  
  constructor(private data: MovieDataService, 
              private router: Router, 

  ) { }
  ngOnInit(): void {
    this.data.getMovies().subscribe((res:any) =>{
      console.log(res);
      this.movies = res.results;
    });
  }

  changeArrowColor() {
    this.toggle = !this.toggle;
    this.sortBy(this.sortValue)
  }

  sortBy(value:string) {
    this.sortValue = value;
    switch (value ) {
      case 'ranking' :
        if(this.toggle == true) {
          this.movies = this.movies.sort((a,b):any=>{
            return a.vote_average - b.vote_average;
          })
        } else {
          this.movies = this.movies.sort((a,b):any=>{
            return b.vote_average - a.vote_average;
          })
        }
        break;
      case 'date':
        if (this.toggle==true) {
          this.movies = this.movies.sort((a,b):any=>{
            this.firstDate = new Date(a.release_date);
            this.lastDate = new Date(b.release_date);
            return this.firstDate - this.lastDate;
          });
        } else {
          this.movies = this.movies.sort((a,b):any=>{
            this.firstDate = new Date(a.release_date);
            this.lastDate = new Date(b.release_date);
            return this.lastDate - this.firstDate;
          });
        }
        break;
      case 'popularity':
        if (this.toggle == true) {
          this.movies = this.movies.sort((a,b):any=>{
            return a.popularity - b.popularity;
          })
        } else {
          this.movies = this.movies.sort((a,b):any=>{
            return b.popularity - a.popularity;
          })
        }
        break;
    }
  }

  goToDescription(movie:any) {
    this.data.getMovies().subscribe(res => { movie = res} )
    this.router.navigate(['movies/description/', movie.id]); 
  }

  getToken() {
    this.data.getToken().subscribe(res=> {
      console.log(res);
    })
  }
  getId() {
    this.data.getId().subscribe(res=> {
      console.log(res);
    })
  }
  getWatchList() {
    this.data.getWatchList().subscribe(res=> console.log(res)
    )
  }
  addMovie() {
    this.data.addMovie().subscribe(res=> console.log(res)
    )
  }
  
}
