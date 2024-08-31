import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { MoviesComponent } from './components/pages/movies/movies.component';
import { MovieDetailsComponent } from './components/pages/movie-details/movie-details.component';

export const routes: Routes = [
    {
        path:'',component:HomeComponent
    },
    {
        path:'movies',component:MoviesComponent
    },
    {
        path:'movie-details/:movieId',component:MovieDetailsComponent
    }
];
