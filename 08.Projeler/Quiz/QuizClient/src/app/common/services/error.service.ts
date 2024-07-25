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

    const errors = err.error.ErrorMessages !== undefined ? err.error.ErrorMessages : err.error.errorMessages

    switch (err.status) {
      case 500:        
        for(let message of errors){
          this.toast.showToast("Error", message,"error");
        }
        break;
    
        case 401:
        for(let message of errors){
          this.toast.showToast("Error", message,"error");
        }
        break;

      default:
        this.toast.showToast("Error", "Something went wrong","error");
        break;
    }
    
  }
}
