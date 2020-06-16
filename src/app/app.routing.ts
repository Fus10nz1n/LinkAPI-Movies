import { FavoriteMoviesComponent } from './pages/favorite-movies/favorite-movies.component';
import { ListMoviesComponent } from './pages/list-movies/list-movies.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AppComponent } from './app.component';

const APP_ROUTES: Routes = [

    { path: '', component: ListMoviesComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'list', component: ListMoviesComponent },
    { path: 'favorite', component: FavoriteMoviesComponent }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);