import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FilmDetail } from '../models/film-detail.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FilmsDetailsService {

  constructor(
    private http: HttpClient
  ) { }

  getFilm(id: any){
    const endpoint = '/streamshop-test/api/v1/events/';
    const compEnd = '/theaters';
    return this.http.get<FilmDetail>(
      environment.apiUrl + endpoint + id + compEnd
    );
  }

  getFilmImage(id: any){
    const endpoint = '/streamshop-test/api/v1/events/';
    return this.http.get<FilmDetail>(
      environment.apiUrl + endpoint + id
    );
  }

}
