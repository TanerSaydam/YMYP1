import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { ResultModel } from '../models/result.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  mainApi = signal<string>("https://localhost:7076");

  constructor(
    private http: HttpClient
  ) { }

  get<T>(endpoint: string, callBack: (res: T)=> void, errorCallback?: (err: HttpErrorResponse) => void){
    this.http.get<ResultModel<T>>(`${this.mainApi()}/api/${endpoint}`).subscribe({
      next: (res)=> {
        callBack(res.data!);
      },
      error: (err: HttpErrorResponse) => {
        if(errorCallback !== null && errorCallback !== undefined){
          errorCallback(err);
        }
      }
    })
  }

  post<T>(endpoint: string, body:any, callBack: (res: T)=> void, errorCallback?: (err: HttpErrorResponse) => void){
    this.http.post<ResultModel<T>>(`${this.mainApi()}/api/${endpoint}`,body).subscribe({
      next: (res)=> {
        callBack(res.data!);
      },
      error: (err: HttpErrorResponse) => {
        if(errorCallback !== null && errorCallback !== undefined){
          errorCallback(err);
        }
      }
    })
  } 
}
