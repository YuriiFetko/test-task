import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {AuthResponse, User} from './interfaces';
import {Observable, Subject, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  get token(): string | null {
    const expireDate = new Date(localStorage.getItem('token-expire')!);
    if (new Date() > expireDate) {
      this.logout();
      return null;
    }
    return localStorage.getItem('token')!;
  }

  public login(user: User): Observable<any> {

    return this.http.post('/api/rest.php/auth/session', user, {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      }
    })
      .pipe(
        // @ts-ignore
        tap(this.setToken),
        catchError(this.handleError.bind(this))
      );
  }

  public logout(): void {
    this.setToken(null);
  }

  public isAuthenticated(): boolean {
    return !!this.token;
  }


  // tslint:disable-next-line:typedef
  private handleError(error: HttpErrorResponse) {
    const message = error.message;

    if (message) {
      console.log(message);
    }
    return throwError(error);
  }

  private setToken(response: AuthResponse | null): void {
    if (response) {
      const expireDate = new Date(new Date().getTime() + +'3600' * 1000);
      localStorage.setItem('token', response.jwt_token);
      localStorage.setItem('token-expire', expireDate.toString());
    } else {
      localStorage.clear();
    }

  }
}
