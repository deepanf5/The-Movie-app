import { Component, inject, Input } from '@angular/core';
import { imagesBaseUrl, MoviesService } from '../../services/movies.service';
import { Movie } from '../../models/movies';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent {

   
  private  moviesService  =  inject(MoviesService);
  public imagesBaseUrl = imagesBaseUrl;
  @Input() movie!: Movie;

  ngOnInit(): void {
    console.log(this.movie)
  }

}
