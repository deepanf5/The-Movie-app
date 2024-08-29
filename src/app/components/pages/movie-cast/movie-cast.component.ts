import { Component } from '@angular/core';
import { PrimeModule } from '../../../modules/primeng.module';

@Component({
  selector: 'app-movie-cast',
  standalone: true,
  imports: [PrimeModule],
  templateUrl: './movie-cast.component.html',
  styleUrl: './movie-cast.component.css'
})
export class MovieCastComponent {

}
