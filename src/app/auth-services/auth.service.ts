import { Injectable } from '@angular/core';
import { MovieDataService } from '../main/movie-data.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private data: MovieDataService) { }
  private isAuth = true;

  loginService() {
    this.isAuth = true;
  }
  logoutService() {
    this.isAuth = false;
  }

  isLoggedIn() {
    return new Promise(resolve=> {
      setTimeout(()=> {
        resolve(this.isAuth)
      }, 200)
    })
  }
  
}
