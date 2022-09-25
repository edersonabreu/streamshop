import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FilmModel } from '../models/film.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FilmsListService {

  constructor(
    private http: HttpClient
  ) { }

  getFilmsList(): Observable<FilmModel[]>{
    const endpoint = '/streamshop-test/api/v1/events/';
    return this.http.get<FilmModel[]>(
      environment.apiUrl + endpoint
    )
  }

}

