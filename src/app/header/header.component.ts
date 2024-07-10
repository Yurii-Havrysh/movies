import { Component } from '@angular/core';
import { MovieDataService } from '../main/movie-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private data: MovieDataService) {}
  
}
