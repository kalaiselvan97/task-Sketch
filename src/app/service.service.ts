import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  url = 'https://api.themoviedb.org/3/movie';
  searchUrl = 'https://api.themoviedb.org/3/search/movie';
  apiKey = '9d86d6f70978cf1e7e712019dc029193';

  constructor(private http: HttpClient) {}

  getListData(pageNumber: number): Observable<any> {
    let path =
      this.url +
      '/popular?api_key=' +
      this.apiKey +
      '&language=en-US&page=' +
      pageNumber;

    return this.http.get(path);
  }

  getDataById(id: number): Observable<any> {
    let path =
      this.url + '/' + id + '?api_key=' + this.apiKey + '&language=en-US';
    return this.http.get(path);
  }

  getDataBySearch(searchvalue: string): Observable<any> {
    let path =
      this.searchUrl +
      '?api_key=' +
      this.apiKey +
      '&language=en-US' +
      '&query=' +
      searchvalue +
      '&page=1&include_adult=false';

    return this.http.get(path);
  }
}
