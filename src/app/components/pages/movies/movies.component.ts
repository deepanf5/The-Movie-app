import { DatePipe } from '@angular/common';
import { Component, DestroyRef, inject, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { imagesBaseUrl, MoviesService } from '../../../services/movies.service';
import { Movie } from '../../../models/movies';
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MovieComponent } from '../../movie/movie.component';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [DatePipe,RouterModule,InfiniteScrollModule,MovieComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {

  private  moviesService  =  inject(MoviesService);
private  pageNumber  =  1;
private destroyRef  =  inject(DestroyRef)
public  moviesObs$  =  this.moviesService.fetchMoviesByType('popular', this.pageNumber);
public  moviesResults:  Movie[] = [];

ngOnInit(){
  this.moviesObs$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((data) => {
    this.moviesResults  =  data.results;
  });
}

onScroll():  void {
  this.pageNumber++;
  this.moviesObs$  =  this.moviesService.fetchMoviesByType('popular', this.pageNumber);
  this.moviesObs$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((data) => {
    this.moviesResults  =  this.moviesResults.concat(data.results);
  });
}

}

