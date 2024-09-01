import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
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
  movieId:any
  @Output() emitMoiveId = new EventEmitter<string>();

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
  this.activatedRouter.params.pipe(map((p)=> {
   this.movieId =  p['movieId']
  } )).subscribe((id)=>{
    this.moviesService.fetchSimilarMovies(this.movieId).subscribe((res) => {
      this.similarMovies = res;
    })
    
  })
  }

  EmitMoiveId(movieId:any) {
    this.emitMoiveId.emit(movieId)
  }

}
