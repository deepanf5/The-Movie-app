import { Component, inject, OnInit } from '@angular/core';
import { imagesBaseUrl, MoviesService } from '../../services/movies.service';
import { Movie } from '../../../models/movies';
import { PrimeModule } from '../../../modules/primeng.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PrimeModule,RouterModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  implements OnInit{

  private pageNumber = 1
  private  moviesService  =  inject(MoviesService);
  public imagesBaseUrl = imagesBaseUrl;
  moviesList:any
  ngOnInit(): void {
    this.moviesService.fetchMoviesByType('popular', this.pageNumber).subscribe((res) => {
      this.moviesList = res.results.slice(0,10);
      console.log(this.moviesList)
    })
  }

}
