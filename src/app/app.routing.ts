import { FavoriteMoviesComponent } from './pages/favorite-movies/favorite-movies.component';
import { DetailMoviesComponent } from './pages/detail-movies/detail-movies.component';
import { ListMoviesComponent } from './pages/list-movies/list-movies.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AuthGuard } from './guards/auth.guard';

const APP_ROUTES: Routes = [

    { path: '', component: ListMoviesComponent, canActivate: [AuthGuard] },
    { path: 'profile', component: ProfileComponent },
    { path: 'list', component: ListMoviesComponent, canActivate: [AuthGuard] },
    { path: 'details', component: DetailMoviesComponent, canActivate: [AuthGuard] },
    { path: 'favorite', component: FavoriteMoviesComponent, canActivate: [AuthGuard] },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
