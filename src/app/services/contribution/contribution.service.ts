import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { endpoints } from '../../config/endpoints';

@Injectable({
    providedIn: 'root'
})
export class ContributionService  {
    constructor(private http: HttpClient) { }

    getContributions(): Observable<HttpResponse<any>> {
        return this.http.get<any>(`${environment.API_URL_V1}/${endpoints.GET_CONTRIBUTIONS}`, {observe : 'response'});
    }

    evaluateContribution(data: any): Observable<HttpResponse<any>> {
        return this.http.post(`${environment.API_URL_V2}/${endpoints.EVALUATE_CONTRIBUTION}`, data, {observe : 'response'});
    }
}
