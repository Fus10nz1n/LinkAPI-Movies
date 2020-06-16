import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: Http) { }

  listMovies() {
    return this.http
      .get('https://api-movies.gateway.linkapi.solutions/v1/movies')
      .map((response: Response) => response.json())
  }
}
