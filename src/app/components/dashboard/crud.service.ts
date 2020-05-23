import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private baseUrl = ''

  constructor(private http: HttpClient) { }

  getFunder(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  addFunder(funder: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, funder);
  }

  editFunder(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteFunder(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getFunders(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
