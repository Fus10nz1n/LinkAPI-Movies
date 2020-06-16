import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/service/movies.service';

@Component({
  selector: 'app-favorite-movies',
  templateUrl: './favorite-movies.component.html',
  styleUrls: ['./favorite-movies.component.css']
})
export class FavoriteMoviesComponent implements OnInit {

  public movies: any;
  public moviesFavorite: any = null;

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.movies = JSON.parse(localStorage.getItem("Movies"));
    this.moviesFavorite = this.movies.filter(this.filterFavorite)

    if (!this.movies) {
      this.moviesList();
    }

  }

  filterFavorite(item) {
    if (item.favorite == false) {
      return null
    } else {
      return item
    }
  }

  filterMovies(data) {
    if (data.length > 3) {
      let filter = this.moviesFavorite.filter(item => {
        if (item.title === data) {
          return item
        } else if (item.actors === data) {
          return item
        } else if (item.genre === data) {
          return item
        } else {
          return null
        }
      })
      this.movies = filter
    } else {
      this.movies = JSON.parse(localStorage.getItem("Movies"));
    }
  }

  moviesList() {
    this.moviesService.listMovies().subscribe(res => {
      this.movies = res;
      this.movies.forEach((item, index) => {
        this.movies[index].favorite = false;
      });
      localStorage.setItem("Movies", JSON.stringify(this.movies));
    })
  }

  favorite(title) {
    this.movies.forEach((item, index) => {
      if (item.title === title) {
        this.movies[index].favorite = true;
      }
    });

    localStorage.setItem("Movies", JSON.stringify(this.movies));
  }

  removeFavorite(title) {
    this.movies.forEach((item, index) => {
      if (item.title === title) {
        this.movies[index].favorite = false;
      }
    });

    localStorage.setItem("Movies", JSON.stringify(this.movies));
  }

}
