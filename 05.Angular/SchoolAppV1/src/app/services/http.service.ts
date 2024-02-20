import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { SwalService } from './swal.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  isLoading: boolean = false;

  constructor(
    private http: HttpClient,
    private auth: AuthService,
    private swal: SwalService
  ) { }

  get(api: string, callBack: (res:any)=> void, errorCallBack?: ()=> void) {
    this.isLoading = true;
    this.http.get(`https://localhost:7135/api/${api}`, {
      headers: {
        "Authorization": "Bearer " + this.auth.token
      }
    }).subscribe({
      next: (res: any) => {
        callBack(res);
        this.isLoading = false;
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
        this.isLoading = false;
        if(errorCallBack != null){
          errorCallBack();
        }
      }
    })
  }

  post(api: string, body:any,callBack: (res:any)=> void, errorCallBack?: ()=> void) {
    this.isLoading = true;
    this.http.post(`https://localhost:7135/api/${api}`,body, {
      headers: {
        "Authorization": "Bearer " + this.auth.token
      }
    }).subscribe({
      next: (res: any) => {
        callBack(res);
        this.isLoading = false;
      },
      error: (err: HttpErrorResponse) => {
        this.swal.callToast(err.error.Message, "error");
        console.log(err);
        this.isLoading = false;
        if(errorCallBack != null){
          errorCallBack();
        }
      }
    })
  }
}
