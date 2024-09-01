import { Component, inject, Input, input, OnInit } from '@angular/core';
import { PrimeModule } from '../../../modules/primeng.module';
import { Movie } from '../../../models/movies';
import { imagesBaseUrl, MoviesService } from '../../services/movies.service';
import { map, Observable } from 'rxjs';
import { Actor } from '../../../models/credits';
import { Video } from '../../../models/video';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-movie-cast',
  standalone: true,
  imports: [PrimeModule,AsyncPipe],
  templateUrl: './movie-cast.component.html',
  styleUrl: './movie-cast.component.css'
})
export class MovieCastComponent implements OnInit {
  @Input() movieCast!:any;
  private moviesService = inject(MoviesService);
  public movie$! : Observable<Movie>;
  public movieCast$!: Observable<Actor[]>; 
  public movieVideos$! : Observable<Video[]>;
  public similarMovies$!: Observable<Movie[]>;
  private activatedRouter = inject(ActivatedRoute);
  public showVideo = false;
  public imagesBaseUrl = imagesBaseUrl;
  ngOnInit(): void {
    this.activatedRouter.params.pipe(map((p)=> p['movieId'])).subscribe((id)=>{
      this.movie$ = this.moviesService.fetchMovieById(id); 
       this.moviesService.fetchMovieCast(id).subscribe((res)=> {
        this.movieCast = res.slice(0,12);
      });
      this.movieVideos$ = this.moviesService.fetchMovieVideos(id);
    })
  }



}
