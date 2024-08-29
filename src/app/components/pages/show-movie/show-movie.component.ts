import { Component, inject, OnInit } from '@angular/core';
import { Movie } from '../../../models/movies';
import { ActivatedRoute } from '@angular/router';
import { imagesBaseUrl, MoviesService } from '../../services/movies.service';
import { CurrencyPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-show-movie',
  standalone: true,
  imports: [CurrencyPipe,JsonPipe],
  templateUrl: './show-movie.component.html',
  styleUrl: './show-movie.component.css'
})
export class ShowMovieComponent implements OnInit {
  
  private moiveServices = inject(MoviesService);
  movieDetails!:Movie;
  movieId!:number
  public imagesBaseUrl = imagesBaseUrl;

  constructor(private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.movieId = params['movieId']
    })
    this.moiveServices.fetchMovieById(this.movieId).subscribe((res:any)=> {
      this.movieDetails = res
      console.log(this.movieDetails)
    })

    this.moiveServices.fetchMovieCast(this.movieId).subscribe((res)=> {
      console.log(res)
      
    })
  }
}
