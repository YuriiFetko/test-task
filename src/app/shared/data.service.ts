import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, pluck} from 'rxjs/operators';
import {Card} from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private  http: HttpClient,
              @Inject('baseUrl') private baseUrl: string[]) {
  }

  public getData(): Observable<Card[]> {
    return this.http.get<any>(`/api/rest.php/knowledge-objects?page=1&count=10&filter[type]=knowledge_base&action=search`, {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI0MDY1IiwicmlkIjoiMyIsImJpZCI6IjJjMWZjOTRhLTUwMmItNDkwOC05NGMzLTZmOTRmY2MyNmY4MyIsImF1ZCI6Imh0dHBzOlwvXC9zYW5kYm94LmRhdmludG9vLmNvbSIsInJlZiI6IjE5NS4xMjMuMTAuNDIiLCJleHAiOjE2MDY3NDM5MzcsIm5iZiI6MTYwNjc0MDMwN30.C-G0xoqms7bF9qLGURLtAvHUIJNfrudaS-5MNwwTZpE'
      }
    })
      .pipe(
        pluck('data'),
        catchError(() => {
          return of([]);
        }));
  }

}
