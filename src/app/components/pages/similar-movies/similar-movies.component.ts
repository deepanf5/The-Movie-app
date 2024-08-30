import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-similar-movies',
  standalone: true,
  imports: [],
  templateUrl: './similar-movies.component.html',
  styleUrl: './similar-movies.component.css'
})
export class SimilarMoviesComponent {

  private activatedRouter = inject(ActivatedRoute);

}
