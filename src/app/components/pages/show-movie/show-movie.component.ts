import { Component, inject, OnInit } from '@angular/core';
import { imagesBaseUrl, MoviesService } from '../../../services/movies.service';
import { Movie } from '../../../models/movies';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-movie',
  standalone: true,
  imports: [],
  templateUrl: './show-movie.component.html',
  styleUrl: './show-movie.component.css'
})
export class ShowMovieComponent implements OnInit {
  
  private moiveServices = inject(MoviesService);
  movie!:Movie;
  movieId!:number
  public imagesBaseUrl = imagesBaseUrl;

  constructor(private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.movieId = params['movieId']
      console.log(this.movieId);
    })
    this.moiveServices.fetchMovieById(this.movieId).subscribe((res:any)=> {
      this.movie = res
      console.log(this.movie.poster_path)
    })
  }
}
