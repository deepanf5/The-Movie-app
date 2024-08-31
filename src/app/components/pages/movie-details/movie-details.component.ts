import { Component, inject } from '@angular/core';
import { Movie } from '../../../models/movies';
import { ActivatedRoute } from '@angular/router';
import { imagesBaseUrl, MoviesService } from '../../services/movies.service';
import { CurrencyPipe, JsonPipe } from '@angular/common';
import { MovieCastComponent } from '../movie-cast/movie-cast.component';
import { SimilarMoviesComponent } from '../similar-movies/similar-movies.component';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [
    CurrencyPipe,
    JsonPipe,
    MovieCastComponent,
    SimilarMoviesComponent
  ],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent {
  private moiveServices = inject(MoviesService);
  movieDetails!:Movie;
  movieId!:number
  imagesBaseUrl = imagesBaseUrl;
  movie:any

  constructor(private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.movieId = params['movieId']
    })
    this.moiveServices.fetchMovieById(this.movieId).subscribe((res:Movie)=> {
      this.movieDetails = res
    })
  }

}
