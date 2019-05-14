import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { endpoints } from '../config/endpoints';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post<{token: string}>(`${environment.API_URL_V3}/${endpoints.check_login}`, {email, password})
    .pipe(map(result => {
      localStorage.setItem('token', result.token);
    }));
  }

  register() {

  }

  logout() {
    localStorage.removeItem('token');
  }

  public get loggedIn(): boolean {
    return (localStorage.getItem('token') !== null);
  }
}
