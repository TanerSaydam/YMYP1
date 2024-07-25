import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { computed, Injectable, signal } from '@angular/core';
import { ResultModel } from '../models/result.model';
import { FlexiToastService } from 'flexi-toast';
import { ErrorService } from './error.service';
import { jwtDecode } from 'jwt-decode';
import { api } from '../../constants';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  token = signal<string>("");
  userName = signal<string>("noone");

  constructor(
    private http: HttpClient,
    private toast: FlexiToastService,
    private error: ErrorService
  ) { 
    this.toast.options.autoClose=true;
    if(localStorage.getItem("my-token")){
      this.token.set(localStorage.getItem("my-token")!);
      this.decodeToken();
    }
  }

  decodeToken(){
    try {
      const decode:any = jwtDecode(this.token());
      this.userName.set(decode["userName"]);
    } catch (error) {
    }
  }

  get<T>(endpoint: string, callBack: (res: T)=> void, errorCallback?: (err: HttpErrorResponse) => void){
    this.http.get<ResultModel<T>>(`${api}/api/${endpoint}`, {
      headers: {
        "Authorization": "Bearer " + this.token()
      }
    }).subscribe({
      next: (res)=> {
        callBack(res.data!);
      },
      error: (err: HttpErrorResponse) => {
        if(errorCallback !== null && errorCallback !== undefined){
          errorCallback(err);
        }

        this.error.errorHandler(err);
      }
    })
  }

  post<T>(endpoint: string, body:any, callBack: (res: T)=> void, errorCallback?: (err: HttpErrorResponse) => void){
    this.http.post<ResultModel<T>>(`${api}/api/${endpoint}`,body, {
      headers: {
        "Authorization": "Bearer " + this.token()
      }
    }).subscribe({
      next: (res)=> {
        callBack(res.data!);
      },
      error: (err: HttpErrorResponse | any) => {
        if(errorCallback !== null && errorCallback !== undefined){
          errorCallback(err);          
        }

        this.error.errorHandler(err);
      }
    })
  } 
}
