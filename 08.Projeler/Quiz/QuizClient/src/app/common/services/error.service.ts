import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FlexiToastService } from 'flexi-toast';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(
    private toast: FlexiToastService
  ) { }

  errorHandler(err: HttpErrorResponse){
    console.log(err);
    switch (err.status) {
      case 500:
        for(let message of err.error.errorMessages){
          this.toast.showToast("Error", message,"error");
        }
        break;
    
      default:
        break;
    }
    
  }
}
