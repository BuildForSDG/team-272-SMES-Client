import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IUser, ISignUp } from '../../components/user/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';


@Injectable()

export class SignUpService {
  currentUser: IUser;
  private _SME_URL = 'https://u-connect.herokuapp.com/sme_signup/';

  constructor(private http: HttpClient) { }

  saveUserInfo(data: ISignUp) {
    console.log(`Data ${data}`);
    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post(this._SME_URL, data, options)
      .pipe(tap(res => {
        this.currentUser.username = res['username'];
        this.currentUser.email = res['email'];
      }))
      .pipe(catchError(this.handleErrors<IUser>('saveUserInfo')));

  }

  private handleErrors<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

}
