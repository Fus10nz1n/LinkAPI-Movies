import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { ProfileComponent } from './pages/profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListMoviesComponent } from './pages/list-movies/list-movies.component';
import { HttpModule } from '@angular/http';
import { MoviesService } from './service/movies.service';
import { FavoriteMoviesComponent } from './pages/favorite-movies/favorite-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ListMoviesComponent,
    FavoriteMoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [MoviesService, { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
