import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { Movie } from '../../../models/movies';
import { ActivatedRoute } from '@angular/router';
import { imagesBaseUrl, MoviesService } from '../../services/movies.service';
import { CurrencyPipe, JsonPipe } from '@angular/common';
import { MovieCastComponent } from '../movie-cast/movie-cast.component';
import { SimilarMoviesComponent } from '../similar-movies/similar-movies.component';
import { PrimeModule } from '../../../modules/primeng.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [
    CurrencyPipe,
    JsonPipe,
    MovieCastComponent,
    SimilarMoviesComponent,
    PrimeModule,
    FormsModule
  ],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent  implements OnInit{
  private moiveServices = inject(MoviesService);
  movieDetails!:Movie;
  movieId!:number
  imagesBaseUrl = imagesBaseUrl;
  movie:any;
  Rating!:any

  constructor(private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.movieId = params['movieId']
    })
    this.moiveServices.fetchMovieById(this.movieId).subscribe((res:Movie)=> {
      this.movieDetails = res
      console.log(this.movieDetails)
      this.Rating = this.movieDetails.vote_average.toFixed();
    })
  }

  handleEvent(id:any) {
    this.moiveServices.fetchMovieById(id).subscribe((res:Movie)=> {
      this.movieDetails = res
      this.Rating = this.movieDetails.vote_average.toFixed();
    })

  }

}
