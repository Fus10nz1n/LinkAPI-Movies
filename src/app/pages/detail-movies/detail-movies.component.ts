import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-movies',
  templateUrl: './detail-movies.component.html',
  styleUrls: ['./detail-movies.component.css']
})
export class DetailMoviesComponent implements OnInit {

  public movie: any;
  public movies: any;
  public favorited: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
    this.movie = JSON.parse(localStorage.getItem("Detail Movie"));
    this.movies = JSON.parse(localStorage.getItem("Movies"));
    this.favorited = this.movie.favorite;

    this.movie.genre = this.movie.genre.split(",").join("");
    this.movie.actors = this.movie.actors.split(",").join("");
    this.movie.director = this.movie.director.split(",").join("");
  }

  return(){
    this.router.navigateByUrl('/');
    localStorage.removeItem('Detail Movie');
  }

  favorite(title) {
    this.movies.forEach((item, index) => {
      if (item.title === title) {
        this.movies[index].favorite = true;
      }
    });

    this.movie.favorite = true;
    localStorage.setItem("Detail Movie", JSON.stringify(this.movie));

    localStorage.setItem("Movies", JSON.stringify(this.movies));
    this.movie = JSON.parse(localStorage.getItem("Detail Movie"));
    this.favorited = true;
    console.log(this.favorited)
  }

  removeFavorite(title) {
    console.log(title)
    this.movies.forEach((item, index) => {
      if (item.title === title) {
        this.movies[index].favorite = false;
      }
    });

    this.movie.favorite = false;
    localStorage.setItem("Detail Movie", JSON.stringify(this.movie));

    localStorage.setItem("Movies", JSON.stringify(this.movies));
    this.movie = JSON.parse(localStorage.getItem("Detail Movie"));
    this.favorited = false;
  }

}
