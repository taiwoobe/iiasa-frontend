import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../config/constants';

@Injectable({
  providedIn: 'root'
})
export class ContributionsService {

  constructor(private http: HttpClient) { }

  getContributions() {
    return this.http.get(AppSettings.API_URL);
  }
}
