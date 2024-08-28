import { Component, inject, Input, OnInit } from '@angular/core';
import { imagesBaseUrl, MoviesService } from '../../services/movies.service';
import { Movie } from '../../models/movies';
import { DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [DatePipe,RouterModule],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent implements OnInit{
 
  public imagesBaseUrl = imagesBaseUrl;
  @Input() movie!: Movie;

  ngOnInit(): void {
  }

}
