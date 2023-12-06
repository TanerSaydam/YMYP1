import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'  
})
export class ErrorService {

  constructor(private message: MessageService) { }

  errorHandler(err: HttpErrorResponse){
    console.log(err);
        switch (err.status) {
          case 400:
            this.message.add({severity: 'error', summary: "Hata!", detail: err.error.message});
            break;

          case 401:
            this.message.add({severity: 'error', summary: "Hata!", detail: "Devam etmek için giriş yapmalısınız"});
            break;

          case 422:
            for(let e of err.error){
              this.message.add({severity: 'error', summary: "Validation Hatası!", detail: e});
            }
            break; 
          case 0:
            this.message.add({severity: 'error', summary: "Hata!", detail: "API Adresine ulaşılamıyor! Lütfen daha sonra tekrar deneyiniz"});
            break;
        }
  }
}
