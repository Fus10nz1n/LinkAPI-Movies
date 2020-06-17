import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './guards/auth.guard';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ListMoviesComponent } from './pages/list-movies/list-movies.component';
import { MoviesService } from './service/movies.service';
import { FavoriteMoviesComponent } from './pages/favorite-movies/favorite-movies.component';
import { DetailMoviesComponent } from './pages/detail-movies/detail-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ListMoviesComponent,
    FavoriteMoviesComponent,
    DetailMoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [MoviesService, AuthGuard, { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
