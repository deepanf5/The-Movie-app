import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../../../models/movies';
import { PrimeModule } from '../../../modules/primeng.module';
import { map } from 'rxjs';
import { MoviesService } from '../../services/movies.service';
import { imagesBaseUrl } from '../../../services/movies.service';

@Component({
  selector: 'app-similar-movies',
  standalone: true,
  imports: [PrimeModule],
  templateUrl: './similar-movies.component.html',
  styleUrl: './similar-movies.component.css'
})
export class SimilarMoviesComponent implements OnInit {

  similarMovies:any = [];
  responsiveOptions:any;
  private moviesService = inject(MoviesService);
  private activatedRouter = inject(ActivatedRoute);
  public imagesBaseUrl = imagesBaseUrl;

  ngOnInit(): void {

    this.responsiveOptions = [
      {
          breakpoint: '1199px',
          numVisible: 5,
          numScroll: 5
      },
      {
          breakpoint: '991px',
          numVisible: 4,
          numScroll: 4
      },
      {
          breakpoint: '767px',
          numVisible: 4,
          numScroll: 4
      }
  ];
  this.activatedRouter.params.pipe(map((p)=> p['movieId'])).subscribe((id)=>{
    this.moviesService.fetchSimilarMovies(id).subscribe((res) => {
      this.similarMovies = res;
      console.log(this.similarMovies)
    })
    
  })
  }

}
