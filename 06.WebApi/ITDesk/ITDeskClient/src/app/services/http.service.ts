import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient,
    private auth: AuthService,
    private error: ErrorService
  ) { }

  get(api: string, callBack: (res: any) => void) {
    this.http.get(`https://localhost:7232/api/${api}`, {
      headers: {
        "Authorization": "Bearer " + this.auth.tokenString
      }
    })
      .subscribe({
        next: (res: any) => {
          callBack(res);
        },
        error: (err: HttpErrorResponse) => {
          this.error.errorHandler(err);
        }
      })
  }

  post(api: string, data: any, callBack: (res: any) => void) {
    this.http.post(`https://localhost:7232/api/${api}`, data, {
      headers: {
        "Authorization": "Bearer " + this.auth.tokenString
      }
    })
      .subscribe({
        next: (res: any) => {
          callBack(res);
        },
        error: (err: HttpErrorResponse) => {
          this.error.errorHandler(err);
        }
      })
  }
}
