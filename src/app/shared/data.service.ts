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
        'Content-Type': 'application/json;charset=UTF-8'
      }
    })
      .pipe(
        pluck('data'),
        catchError(() => {
          return of([]);
        }));
  }

}
