import { MoviesService } from '../../service/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit {

  public movies: any;
  public details: any;

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.movies = JSON.parse(localStorage.getItem("Movies"));

    if (!this.movies) {
      this.moviesList();
    }

  }

  detailsMovies(movie){
    this.details = this.movies.filter(item => {
      if (item.title === movie){
        return item;
      }
    });
    console.log(this.details[0])
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

  filterMovies(data) {
        if (data.length > 3) {
      let filter = this.movies.filter(item => {
        if (item.title === data) {
          return item
        } else if (item.actors === data) {
          return item
        } else if (item.genre === data){
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
