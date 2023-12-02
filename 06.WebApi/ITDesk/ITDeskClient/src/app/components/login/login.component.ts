import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';
import { DividerModule } from 'primeng/divider';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginModel } from '../../models/login.model';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule, 
    CardModule, 
    ButtonModule, 
    InputTextModule, 
    PasswordModule, 
    FormsModule, 
    DividerModule,
    ToastModule,
    CheckboxModule
  ],
  providers: [MessageService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent {
  request: LoginModel = new LoginModel();

  constructor(
    private message: MessageService, 
    private http: HttpClient,
    private router: Router){}
  signIn(){
    if(this.request.userNameOrEmail.length < 3){
      this.message.add({ severity: 'warn', summary: 'Validasyon Hatası!', detail: 'Geçerli bir kullanıcı adı ya da mail adresi girin'});
      return;
    }

    if(this.request.password.length < 6){
      this.message.add({ severity: 'warn', summary: 'Validasyon Hatası!', detail: 'Şifreniz en az 6 karakter olmalıdır'});
      return;
    }    

    this.http.post("https://localhost:7232/api/Auth/Login",this.request)
    .subscribe(res=> {
      localStorage.setItem("response", JSON.stringify(res));
      this.router.navigateByUrl("/");
    })
  }
}
