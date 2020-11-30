import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Card} from '../../../shared/interfaces';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CardResolverService implements Resolve<Card | null> {

  constructor(private http: HttpClient, private router: Router) {
  }

  public resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<Card | null> {
    const id = route.paramMap.get('id');
    return this.http.get<Card>(`/home-page/${id}`)
      .pipe(
        map((card: Card | null) => {
          if (!card) {
            this.router.navigate(['/home-page']);
          }
          return card;
        }),
        catchError(() => {
          this.router.navigate(['/home-page']);
          return of(null);
        })
      );
  }
}
